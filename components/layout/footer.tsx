import React from "react";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { ArrowRightIcon, Github, Linkedin, Twitter } from "lucide-react";
import MaxWidthContainer from "../ui/container";
import Link from "next/link";
import { InstagramIcon } from "@/lib/svg";

export default function Footer() {
  return (
    <div className="bg-background">
      <MaxWidthContainer
        className=" grid gap-5
			"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-5  ">
          <div className="grid gap-3 ">
            <div className="text-lg font-bold ">Product</div>
            <div className="grid gap-5">
              <div className="">
                <Link href="/#">Digital Card For Individual</Link>
              </div>
              <div className="">
                <Link href="/#">Digital Card For Business</Link>
              </div>
            </div>

            <Button
              variant="link"
              className=" justify-start px-0 font-bold text-accent-foreground gap-2"
            >
              <Link
                href="/contact"
                className="flex flex-row gap-2 items-center "
              >
                Contact sales
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid gap-3">
            <div className="text-lg font-bold"> Solutions</div>
            <div className="grid gap-5">
              <div className="">
                <Link href="/#">Business</Link>
              </div>
              <div className="">
                <Link href="/#">Integrations</Link>
              </div>
              <div className="">
                <Link href="/#">Field Teams</Link>
              </div>
            </div>
          </div>

          <div className="grid gap-3">
            <div className="text-lg font-bold">Connect</div>
            <div className="grid gap-5">
              <div className="">
                <Link href="/#">ISCE Connect</Link>
              </div>
              <div className="">
                <Link href="/#">ISCE Store</Link>
              </div>
              <div className="">
                <Link href="/#">Connect For Business</Link>
              </div>
              <div className="">
                <Link href="/#">Soft POS</Link>
              </div>
            </div>
          </div>

          <div className="grid gap-3">
            <div className="text-lg font-bold">Resources </div>
            <div className="grid gap-5">
              <div className="">
                <Link href="/#">Customers</Link>
              </div>
              <div className="">
                <Link href="/#">Pricing</Link>
              </div>
              <div className="">
                <Link href="/#">Privacy Policy</Link>
              </div>
            </div>
          </div>
          <div className="grid gap-3">
            <div className="text-lg font-bold">Company</div>
            <div className="grid gap-5">
              <div className="">
                <Link href="/#">About</Link>
              </div>
              <div className="">
                <Link href="/#">Careers</Link>
              </div>
              <div className="">
                <Link href="/blog">Blog</Link>
              </div>
            </div>
          </div>
        </div>

        <Separator />
        <div className="flex flex-col md:flex-row justify-between gap-10  ">
          <div className="max-w-96">
            {`ISCE's mission is to put the power, beauty, and magic of software
            development into the hands of a billion new creators. `}
            <Link href="/#">
              <span className="text-blue-500">Join Us</span>
            </Link>
          </div>
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex flex-wrap gap-5">
              <div className="">
                <Link href="/#">Terms of use</Link>
              </div>

              <div className="">
                <Link href="/#">Cookies Policy</Link>
              </div>
              <div className="">
                <Link href="/#">Submit a Complaint</Link>
              </div>
              <div className="">
                <Link href="/#">ISCE Compliance</Link>
              </div>
            </div>
            <div className="">
              <div className="flex gap-5">
                <Link href="https://www.instagram.com/iscetech">
                  <InstagramIcon />
                </Link>
                <Link href="https://www.twitter.com/isceapp">
                  <Twitter />{" "}
                </Link>
                <Link href="https://www.linkedin.com/company/isceapp">
                  <Linkedin />
                </Link>
                <Link href="https://www.giithub.com/iscedcs">
                  <Github />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthContainer>
    </div>
  );
}
