import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

export default function ContactComponent() {
	return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center">
      <div className="w-full max-w-4xl mx-auto p-8">
        <h1 className="text-6xl font-bold text-center">{`Contact us`}</h1>
        <p className="text-xl text-center mt-4 mb-12">
          {`Get in touch and let us know how we can help.`}
        </p>
        <div className="flex flex-wrap justify-between -mx-4">
          <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
            <h2 className="text-2xl font-semibold mb-6">
              {`General enquiries`}
            </h2>
            <form className="space-y-6">
              <div>
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="name"
                >
                  {`Name`}
                </label>
                <Input
                  required
                  className="w-full"
                  id="name"
                  placeholder="Jess Smith"
                  type="text"
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="email"
                >
                  {`Email`}
                </label>
                <Input
                  required
                  className="w-full"
                  id="email"
                  placeholder="jess@company.com"
                  type="email"
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="message"
                >
                  {`Message`}
                </label>
                <Textarea
                  required
                  className="w-full"
                  id="message"
                  placeholder="Write your message here"
                />
              </div>
              <Button className="w-full">{`Send message`}</Button>
            </form>
          </div>
          <div className="w-full lg:w-1/2 px-4">
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-2">{`Sales`}</h3>
              <p className="mb-1">
                {`We'd love to talk about how we can work
								together.`}
              </p>
              <a className="text-blue-400 hover:text-blue-500" href="#">
                {`info@isce.tech`}
              </a>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">{`Support`}</h3>
              <p className="mb-1">
                {`We're here to help with any questions
								you may have.`}
              </p>
              <a className="text-blue-400 hover:text-blue-500" href="#">
                {`support@isce.tech`}
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="xl:w-full lg:w-full md:w-full items-center overflow-hidden  justify-center xl:max-w-7xl mx-auto">
        <iframe
          className="w-full mx-auto"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.720024241891!2d3.465805674080175!3d6.4300021242447025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b917993a95193%3A0x21bdfe095d86ad6d!2sISCE%20DIGITAL%20CONCEPT!5e0!3m2!1sen!2sng!4v1707147460978!5m2!1sen!2sng"
          width="800"
          height="600"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}
