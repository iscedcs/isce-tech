import {
	CardTitle,
	CardHeader,
	CardDescription,
	CardContent,
	Card,
} from '@/components/ui/card';

import MaxWidthContainer from '../ui/container';
import { services } from '@/lib/const';
import Link from 'next/link';


export default function ServiceRendered() {
	
	return (
    <MaxWidthContainer className="text-white">
      <div className="flex justify-center mb-6 md:mb-12">
        <h1 className="text-4xl md:text-6xl font-bold">SERVICES RENDERED</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-blue-600 via-[#f15a24] to-blue-600 text-white rounded-t rounded-b-lg"
          >
            <Card className="bg-gray-800 back w-full mt-1 rounded-b-lg rounded-t-none border-none text-white">
              <CardHeader>
                <CardTitle className="h-10">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className=" line-clamp-6">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </MaxWidthContainer>
  );
}
