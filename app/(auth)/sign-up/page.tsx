import SignUpForm from "@/components/forms/sign-up-form";
import MaxWidthWrapper from "@/components/layout/maxwidth-wrapper";

export default function SignUpPage() {
    return (
      <div>
          <MaxWidthWrapper className='grid mx-auto gap-5 py-28  items-center justify-center'>
                <SignUpForm />
          </MaxWidthWrapper>
      </div>
    )
  }
  