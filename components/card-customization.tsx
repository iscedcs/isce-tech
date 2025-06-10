"use client";

import type React from "react";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Upload, Download, Info, AlertCircle } from "lucide-react";
import { formatCurrency } from "@/lib/utils";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface CardCustomizationProps {
  onCustomizationChange: (customization: CardCustomizationData) => void;
  productPrice: number;
  productColor: string;
}

export interface CardCustomizationData {
  isCustomized: boolean;
  frontDesignFile: File | null;
  backDesignFile: File | null;
  hasCustomDesign: boolean; // Renamed to match CartItem
  customizationFee: number; // Added to match CartItem
  designServiceFee: number;
  cardColor: string;
}

export default function CardCustomization({
  onCustomizationChange,
  productPrice,
  productColor,
}: CardCustomizationProps) {
  const [customization, setCustomization] = useState<CardCustomizationData>({
      isCustomized: false,
    frontDesignFile: null,
    backDesignFile: null,
    hasCustomDesign: false,
    customizationFee: 0,
    designServiceFee: 0,
    cardColor: productColor,
  });

  const [frontPreview, setFrontPreview] = useState<string | null>(null);
  const [backPreview, setBackPreview] = useState<string | null>(null);

  const frontInputRef = useRef<HTMLInputElement>(null);
  const backInputRef = useRef<HTMLInputElement>(null);

  // Update the pricing structure and clarify the options
  const CUSTOMIZATION_FEE = 200000; // 5,000 NGN for uploading own designs
  const DESIGN_SERVICE_FEE = 300000; // Additional 5,000 NGN for designer service

    const colors = [
    "Midnight Blue",
    "Emerald Green",
    "Rose Pink",
    "Arctic White",
    "Onyx Black",
  ];
  const handleCustomizationToggle = (checked: boolean) => {
    const newCustomization = {
      ...customization,
      isCustomized: checked,
        customizationFee: checked ? CUSTOMIZATION_FEE : 0,
      designServiceFee: checked && customization.hasCustomDesign ? DESIGN_SERVICE_FEE : 0,

    };
    setCustomization(newCustomization);
    onCustomizationChange(newCustomization);
  };

  const handleCustomDesignToggle = (checked: boolean) => {
    const newCustomization = {
      ...customization,
      hasCustomDesign: checked,
      designServiceFee: checked ? DESIGN_SERVICE_FEE : 0,
      customizationFee: customization.isCustomized ? CUSTOMIZATION_FEE : 0,
    };
    setCustomization(newCustomization);
    onCustomizationChange(newCustomization);
  };

    const handleColorChange = (value: string) => {
    const newCustomization = { ...customization, cardColor: value };
    setCustomization(newCustomization);
    onCustomizationChange(newCustomization);
  };

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: "front" | "back"
  ) => {
    const file = e.target.files?.[0] || null;
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;

      if (type === "front") {
        setFrontPreview(result);
        setCustomization((prev) => {
          const updated = { ...prev, frontDesignFile: file };
          onCustomizationChange(updated);
          return updated;
        });
      } else if (type === "back") {
        setBackPreview(result);
        setCustomization((prev) => {
          const updated = { ...prev, backDesignFile: file };
          onCustomizationChange(updated);
          return updated;
        });
      }
    };
    reader.readAsDataURL(file);
  };

  const triggerFileInput = (ref: React.RefObject<HTMLInputElement>) => {
    ref.current?.click();
  };

  const generatePDF = () => {
    // In a real implementation, this would generate a PDF with the card design
    // For now, we'll just show an alert
    alert("PDF generation would happen here in a real implementation");
  };

  if (!customization.isCustomized) {
    return (
      <motion.div
        className="mt-6 space-y-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label htmlFor="customize-card">Customize this card</Label>
            <p className="text-sm text-muted-foreground">
              Add your design to personalize your NFC card
            </p>
          </div>
          <Switch
            id="customize-card"
            checked={customization.isCustomized}
            onCheckedChange={handleCustomizationToggle}
          />
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
    >
      <Card className="mt-6 bg-foreground text-white">
        <CardHeader>
          <CardTitle>Card Customization</CardTitle>
          <CardDescription>
            Personalize your NFC card with your own design or let us create one
            for you
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert>
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              Note: Only one revision is allowed for custom card designs
            </AlertDescription>
          </Alert>

          <div className="space-y-2">
            <Label>Card Color</Label>
            <Select onValueChange={handleColorChange} value={customization.cardColor}>
              <SelectTrigger>
                <SelectValue placeholder="Select color" />
              </SelectTrigger>
              <SelectContent>
                {colors.map((color) => (
                  <SelectItem key={color} value={color}>
                    {color}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Tabs defaultValue="upload" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="upload">Upload Your Design</TabsTrigger>
              <TabsTrigger value="preview">Preview Design</TabsTrigger>
            </TabsList>

            <TabsContent value="upload" className="space-y-4">
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <Label htmlFor="front-design-upload">Front Card Design</Label>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Info className="h-4 w-4 text-muted-foreground" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Recommended size: 1050x650px, PNG or JPG format</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                  <input
                    type="file"
                    id="front-design-upload"
                    ref={frontInputRef}
                    className="hidden"
                    accept="image/*"
                    onChange={(e) => handleFileChange(e, "front")}
                  />
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      variant="outline"
                      className="w-full h-32 border-dashed"
                      onClick={() => triggerFileInput(frontInputRef)}
                    >
                      {frontPreview ? (
                        <div className="relative w-full h-full flex items-center justify-center">
                          <Image
                            src={frontPreview || "/placeholder.svg"}
                            alt="Front design preview"
                            width={160}
                            height={100}
                            className="object-contain max-h-28"
                          />
                        </div>
                      ) : (
                        <div className="flex flex-col items-center justify-center text-muted-foreground">
                          <Upload className="h-6 w-6 mb-2" />
                          <span>Upload Front Design</span>
                        </div>
                      )}
                    </Button>
                  </motion.div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <Label htmlFor="back-design-upload">Back Card Design</Label>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Info className="h-4 w-4 text-muted-foreground" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Recommended size: 1050x650px, PNG or JPG format</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                  <input
                    type="file"
                    id="back-design-upload"
                    ref={backInputRef}
                    className="hidden"
                    accept="image/*"
                    onChange={(e) => handleFileChange(e, "back")}
                  />
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      variant="outline"
                      className="w-full h-32 border-dashed"
                      onClick={() => triggerFileInput(backInputRef)}
                    >
                      {backPreview ? (
                        <div className="relative w-full h-full flex items-center justify-center">
                          <Image
                            src={backPreview || "/placeholder.svg"}
                            alt="Back design preview"
                            width={160}
                            height={100}
                            className="object-contain max-h-28"
                          />
                        </div>
                      ) : (
                        <div className="flex flex-col items-center justify-center text-muted-foreground">
                          <Upload className="h-6 w-6 mb-2" />
                          <span>Upload Back Design</span>
                        </div>
                      )}
                    </Button>
                  </motion.div>
                </motion.div>
              </div>

              <motion.div
                className="pt-4 border-t border-border"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="custom-design">Need a custom design?</Label>
                    <p className="text-sm text-muted-foreground">
                      Our designers will create a professional card design for you
                    </p>
                  </div>
                  <Switch
                    id="custom-design"
                    checked={customization.hasCustomDesign}
                    onCheckedChange={handleCustomDesignToggle}
                  />
                </div>

                {customization.hasCustomDesign && (
                  <motion.div
                    className="mt-4 p-4 bg-muted rounded-lg"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-sm font-medium text-foreground">
                      Custom design service: {formatCurrency(DESIGN_SERVICE_FEE)}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      This is in addition to the {formatCurrency(CUSTOMIZATION_FEE)} customization fee.
                      Our design team will create a professional card design for you.
                      You&apos;ll receive a draft for approval within 2 business days.
                    </p>
                  </motion.div>
                )}
              </motion.div>
            </TabsContent>

            <TabsContent value="preview" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  className="space-y-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <Label>Front Preview</Label>
                  <div className="aspect-[1.618/1] bg-muted rounded-lg flex items-center justify-center overflow-hidden">
                    {frontPreview ? (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Image
                          src={frontPreview || "/placeholder.svg"}
                          alt="Front card preview"
                          width={300}
                          height={185}
                          className="object-contain max-w-full max-h-full"
                        />
                      </motion.div>
                    ) : customization.hasCustomDesign ? (
                      <p className="text-muted-foreground text-center p-4">
                        Our designers will create your custom front design
                      </p>
                    ) : (
                      <p className="text-muted-foreground text-center p-4">
                        Upload a front design to see preview
                      </p>
                    )}
                  </div>
                </motion.div>

                <motion.div
                  className="space-y-2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <Label>Back Preview</Label>
                  <div className="aspect-[1.618/1] bg-muted rounded-lg flex items-center justify-center overflow-hidden">
                    {backPreview ? (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Image
                          src={backPreview || "/placeholder.svg"}
                          alt="Back card preview"
                          width={300}
                          height={185}
                          className="object-contain max-w-full max-h-full"
                        />
                      </motion.div>
                    ) : customization.hasCustomDesign ? (
                      <p className="text-muted-foreground text-center p-4">
                        Our designers will create your custom back design
                      </p>
                    ) : (
                      <p className="text-muted-foreground text-center p-4">
                        Upload a back design to see preview
                      </p>
                    )}
                  </div>
                </motion.div>
              </div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  variant="outline"
                  className="w-full mt-4"
                  onClick={generatePDF}
                  disabled={
                    !frontPreview &&
                    !backPreview &&
                    !customization.hasCustomDesign
                  }
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download Design as PDF
                </Button>
              </motion.div>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter className="flex justify-between border-t border-border pt-4">
          <div>
            <p className="text-sm font-medium">
              Total:{" "}
              {formatCurrency(
                productPrice +
                  customization.customizationFee +
                  customization.designServiceFee
              )}
            </p>
            {(customization.customizationFee > 0 ||
              customization.designServiceFee > 0) && (
              <p className="text-xs text-muted-foreground">
                Includes {formatCurrency(CUSTOMIZATION_FEE)} for customization
                {customization.hasCustomDesign && (
                  <> + {formatCurrency(DESIGN_SERVICE_FEE)} for design service</>
                )}
              </p>
            )}
          </div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="outline"
              className="text-foreground"
              onClick={() => handleCustomizationToggle(false)}
            >
              Cancel Customization
            </Button>
          </motion.div>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
