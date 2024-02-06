import React from "react";
import { CloudLightningIcon, UploadCloudIcon, TargetIcon } from "lucide-react";

export default function Process() {
  return (
    <div  className="xl:flex-row lg:flex-row flex-col my-3 flex justify-between gap-4">
      <div className= "transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-95  duration-700 bg-gradient-to-br from-blue-600 via-[#f15a24] to-blue-600 text-white rounded-t-lg rounded-b-lg">
        <div className="flex flex-col items-center p-4 bg-gray-800 rounded-lg">
          <div className="flex items-center space-x-2">
            <CloudLightningIcon className="text-[#38bdf8] h-6 w-6" />
            <h3 className="mt-2 text-lg font-semibold text-white">
              {`Instant Access`}
            </h3>
          </div>
          <p className="mt-2 text-sm text-gray-300">
           {` Seamlessly transition from tradition to digital. Click on the result, and
            you'll find yourself in a digital, ready to analyze, or share
            the specific data you you wish to share.`}
          </p>
        </div>
      </div>

      <div className=" transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-95  duration-700 bg-gradient-to-br from-blue-600 via-[#f15a24] to-blue-600 text-white rounded-t-lg rounded-b-lg">
        <div className="flex flex-col items-center p-4 bg-gray-800 rounded-lg">
          <div className="flex items-center space-x-2">
            <UploadCloudIcon className="text-[#34d399] h-6 w-6" />
            <h3 className="mt-2 text-lg font-semibold text-white">
             {` Upload and Share`}
            </h3>
          </div>
          <p className="mt-2 text-sm text-gray-300">
           {` With ISCE digital card, you're not limited to your integrated apps. You can easily
            upload your information from your local storage and share web links or text
            within the social apps.`}
          </p>
        </div>
      </div>

        <div className=" transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-95 duration-700 bg-gradient-to-br from-blue-600 via-[#f15a24] to-blue-600 text-white rounded-t-lg rounded-b-lg">
            <div className="flex flex-col items-center p-4 bg-gray-800 rounded-lg">
            <div className="flex items-center space-x-2">
                <TargetIcon className="text-[#a78bfa] h-6 w-6" />
                <h3 className="mt-2 text-lg font-semibold text-white">{`One place`}</h3>
            </div>
            <p className="mt-2 text-sm text-gray-300">
                {`ISCE digital card keeps all your data, files, and discussions in one central
                location. No need to switch between apps or platforms; everything
                you need is within your account.`}
            </p>
            </div>
        </div>
    </div>
  );
}
