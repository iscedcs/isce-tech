import { Button } from "@/components/ui/button"
import Image from "next/image";


export default function Gallery() {
  return (
    <div className="bg-primary w-full py-12 px-8 " style={{ backgroundImage: `url('/teamSection.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="  px-4 sm:px-6">
        <h2 className="text-5xl font-bold">{`GALLERY/WORKDONE`}</h2>
        <p className="mt-4 max-w-xl text-lg">
          {`Feature your most important posts in a carousel that's designed to show posts from different platforms and
      links seamlessly side by side.`}
        </p>
        <div className="flex justify-center mt-8 space-x-4">
          <div className="bg-secondary rounded-lg overflow-hidden shadow-lg">
          <Image
              alt="Interior"
              className="w-full h-auto"
              height={200}
              src="/imagetest2.jpg"
              style={{
                aspectRatio: "300/200",
                objectFit: "cover",
              }}
              width={300}
            />
            <div className="p-4">
              <Button className="bg-primary text-secondary">{`Check out my new video!`}</Button>
            </div>
          </div>
          <div className="bg-secondary rounded-lg overflow-hidden shadow-lg">
            <Image
              alt="Isabella O'Connor"
              className="w-full h-auto"
              height={200}
              src="/imagetest3.jpg"
              style={{
                aspectRatio: "300/200",
                objectFit: "cover",
              }}
              width={300}
            />
            <div className="p-4">
              <p className="text-lg font-semibold">{`Isabella O'Connor`}</p>
            </div>
          </div>
          <div className="bg-secondary rounded-lg overflow-hidden shadow-lg">
            <Image
              alt="Interior"
              className="w-full h-auto"
              height={200}
              src="/imagetest2.jpg"
              style={{
                aspectRatio: "300/200",
                objectFit: "cover",
              }}
              width={300}
            />
            <div className="p-4">
              <Button className="bg-primary text-secondary">{`Interior trends 2023`}</Button>
            </div>
          </div>
          <div className="bg-secondary rounded-lg overflow-hidden shadow-lg">
            <Image
              alt="Rose"
              className="w-full h-auto"
              height={200}
              src="/imagetest1.jpg"
              style={{
                aspectRatio: "300/200",
                objectFit: "cover",
              }}
              width={300}
            />
            <div className="p-4">
              <Button className="bg-primary text-secondary">{`Check out my new video!`}</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}