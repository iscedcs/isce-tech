import React from "react";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import {
  ArrowRightIcon,
  Github,
  Linkedin,
  Twitter,
  Youtube,
} from "lucide-react";
import MaxWidthContainer from "../ui/container";

export default function Footer() {
  return (
    <div className="bg-background">
      <MaxWidthContainer className=" grid gap-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-5  ">
          <div className="grid gap-3 ">
            <div className="text-lg font-bold ">Product</div>
            <div className="grid gap-3">
              <div className="">App</div>
              <div className="">Data</div>
              <div className="">Action </div>
              <div className="">Glide AI</div>
              <div className="">Integrations </div>
            </div>
            <Button
              variant="link"
              className=" justify-start px-0 font-bold text-accent-foreground gap-2"
            >
              Contact sales
              <ArrowRightIcon className="h-4 w-4" />
            </Button>
          </div>
          <div className="grid gap-3">
            <div className="text-lg font-bold"> Solutions</div>
            <div className="grid gap-3">
              <div className="">Business</div>
              <div className="">Operation </div>
              <div className="">IT&Engineering</div>
              <div className=""> Agenies </div>
              <div className="">Field Teams</div>
            </div>
          </div>
          <div className="grid gap-3">
            <div className="text-lg font-bold">Use Cases</div>
            <div className="grid gap-3">
              <div className="">Work order Management</div>
              <div className="">Inspection Tools </div>
              <div className="">Inventroy Management</div>
              <div className=""> Field Sales</div>
              <div className=""> Knowledge Management</div>
            </div>
          </div>
          <div className="grid gap-3">
            <div className="text-lg font-bold">Connect</div>
            <div className="grid gap-3">
              <div className="">Google Sheets</div>
              <div className=""> Airtable</div>
              <div className="">Big Table </div>
              <div className="">Excel </div>
              <div className=""> BigQuery</div>
            </div>
          </div>
          <div className="grid gap-3">
            <div className="text-lg font-bold">Resources </div>
            <div className="grid gap-3">
              <div className="">Customer Stories</div>
              <div className="">App</div>
              <div className="">App</div>
              <div className="">App</div>
              <div className="">App</div>
            </div>
          </div>
          <div className="grid gap-3 ">
            <div className="text-lg font-bold">Company</div>
            <div className=" grid gap-3">
              <div className="">App</div>
              <div className="">App</div>
              <div className="">App</div>
              <div className="">App</div>
              <div className="">App</div>
            </div>
          </div>
        </div>

        <Separator />
        <div className="flex flex-col md:flex-row justify-between gap-10  ">
          <div className="max-w-96">
            {`ISCE's mission is to put the power, beauty, and magic of software
            development into the hands of a billion new creators. `}
            <span className="text-blue-500">Join Us</span>
          </div>
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex flex-wrap gap-5">
              <div className="">Status</div>
              <div className="">Terms</div>
              <div className="">Privacy</div>
              <div className="">OSS</div>
              <div className="">Sitemap</div>
              <div className=""> Contact us</div>
            </div>
            <div className="">
              <div className="flex gap-5">
                <Youtube /> <Twitter /> <Linkedin /> <Github />
              </div>
            </div>
          </div>
        </div>
      </MaxWidthContainer>
    </div>
  );
}
