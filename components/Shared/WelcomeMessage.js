import { Icon, Message, Divider } from "semantic-ui-react";
import { useRouter } from "next/router";
import Link from "next/link";

export const HeaderMessage = () => {
  const router = useRouter();
  const signupRoute = router.pathname === "/signup";

  return (
    <Message
      color="olive"
      attached
      header={signupRoute ? "إبدأ بالتسجيل" : "مرحبا بعودتك"}
      icon={signupRoute ? "settings" : "privacy"}
      content={
        signupRoute
          ? "سجل حساب جديد"
          : "الدخول باستخدام البريد الإكتروني وكلمة المرور"
      }
    />
  );
};

export const FooterMessage = () => {
  const router = useRouter();
  const signupRoute = router.pathname === "/signup";

  return (
    <>
      {signupRoute ? (
        <>
          <Message attached="bottom" warning>
            <Icon name="warning" />
            مسجل من قبل <Link href="/login">الدخول هنا</Link>
          </Message>
          <Divider hidden />
        </>
      ) : (
        <>
          <Message attached="bottom" info>
            <Icon name="lock" />
            <Link href="/reset">هل نسيت كلمة المرور ؟</Link>
          </Message>

          <Message attached="bottom" warning>
            <Icon name="warning" />
            غير مسجل <Link href="/signup">سجل هنا</Link>
          </Message>
        </>
      )}
    </>
  );
};
