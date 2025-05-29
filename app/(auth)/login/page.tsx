import CardWrapper from "@/components/auth/card-wrapper";
import LoginForm from "@/components/forms/login-form";
import MaxWidthWrapper from "@/components/layout/maxwidth-wrapper";

export default function Login() {
    return (
      <div>
          <MaxWidthWrapper className='grid mx-auto gap-5 my-10 items-center justify-center'>
                <LoginForm />
          </MaxWidthWrapper>
      </div>
    )
  }
  