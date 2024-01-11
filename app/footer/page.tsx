import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Facebook, Github, Linkedin, Twitter, Youtube } from "lucide-react";
import React from "react";

export default function footer() {
  return (
    <div>
      <div className=" grid gap-10 p-16 text-center">
        <div className="text-4xl font-bold ">FOOTER</div>
        <div className="grid grid-cols-6 gap-5  ">
          <div className="grid gap-5 ">
            <div className="text-lg font-bold ">Product</div>
            <div className="grid gap-5">
              <div className="">App</div>
              <div className="">Data</div>
              <div className="">Action </div>
              <div className="">Glide AI</div>
              <div className="">Integrations </div>
            </div>
          </div>
          <div className="grid gap-5">
            <div className="text-lg font-bold"> Solutions</div>
            <div className="grid gap-5">
              <div className="">Business</div>
              <div className="">Operation </div>
              <div className="">IT&Engineering</div>
              <div className=""> Agenies </div>
              <div className="">Field Teams</div>
            </div>
          </div>
          <div className="grid gap-5">
            <div className="text-lg font-bold">Use Cases</div>
            <div className="grid gap-5">
              <div className="">Work order Management</div>
              <div className="">Inspection Tools </div>
              <div className="">Inventroy Management</div>
              <div className=""> Field Sales</div>
              <div className=""> Knowledge Management</div>
            </div>
          </div>
          <div className="grid gap-5">
            <div className="text-lg font-bold">Connect</div>
            <div className="grid gap-5">
              <div className="">Google Sheets</div>
              <div className=""> Airtable</div>
              <div className="">Big Table </div>
              <div className="">Excel </div>
              <div className=""> BigQuery</div>
            </div>
          </div>
          <div className="grid gap-5">
            <div className="text-lg font-bold">Resources </div>
            <div className="grid gap-5">
              <div className="">Customer Stories</div>
              <div className="">App</div>
              <div className="">App</div>
              <div className="">App</div>
              <div className="">App</div>
            </div>
          </div>
          <div className="grid gap-5 ">
            <div className="text-lg font-bold">Company</div>
            <div className=" grid gap-5">
              <div className="">App</div>
              <div className="">App</div>
              <div className="">App</div>
              <div className="">App</div>
              <div className="">App</div>
            </div>
          </div>
          <Button> Contact sales</Button>
        </div>

        <Separator />
        <div className="flex justify-between gap-10  ">
          <div className="max-w-96">
            Glide's mission is to put the power, beauty, and magic of software
            development into the hands of a billion new creators.
            <span className="text-blue-500">Join Us</span>
          </div>
          <div className="flex gap-5">
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
    </div>
  );
}
