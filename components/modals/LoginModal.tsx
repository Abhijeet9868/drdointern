import { signIn } from "next-auth/react";
import { useCallback, useState } from "react";
import { toast } from "react-hot-toast";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import ReCAPTCHA from "react-google-recaptcha";
import { ReCAPTCHAProps } from "react-google-recaptcha/lib/esm/recaptcha-wrapper";

import useLoginModal from "@/hooks/useLoginModal";
import useRegisterModal from "@/hooks/useRegisterModal";
import axios from "axios";

import Input from "../Input";
import Modal from "../Modal";

const LoginModal = () => {
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();
  const { executeRecaptcha } = useGoogleReCaptcha();

  const [isBtnDisabled, setBtnDisabled] = useState(false);
  const [response, setResponse] = useState({ message: "", status: "" });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = useCallback(async () => {
    try {
      setIsLoading(true);

      if (!executeRecaptcha) {
        return;
      }
      try {
        const token = await executeRecaptcha();
        if (!token) {
          setResponse({ message: "Failed to Send!!!", status: "Failed" });
          return;
        }

        const result = await axios.post("/api/recaptcha", {
          token,
        });
        console.log(result);

        if (result.data) {
          setResponse({
            message: result.data.message,
            status: result.data.status,
          });
        }
        setBtnDisabled(false);
      } catch (error) {
        console.log(error);
        setResponse({ message: "Failed to Send!!!", status: "Failed" });
        setBtnDisabled(false);
      }

      await signIn("credentials", {
        email,
        password,
      });

      toast.success("Logged in");

      loginModal.onClose();
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  }, [email, password, loginModal]);

  const onToggle = useCallback(() => {
    loginModal.onClose();
    registerModal.onOpen();
  }, [loginModal, registerModal]);

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        disabled={isLoading}
      />
      <Input
        placeholder="Password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        disabled={isLoading}
      />
      <ReCAPTCHA sitekey="6LcSkgEnAAAAAHhydAVIWsPERWVda_Vz69xzAuDo" />
      <div className="text-sm">
        <h3
          className="subtitle-4"
          style={{
            color: response?.status === "Failed" ? "red" : "#24ff72",
          }}
        >
          {response?.message}
        </h3>
      </div>
    </div>
  );

  const footerContent = (
    <div className="text-neutral-400 text-center mt-4">
      <p>
        First time using Twitter?
        <span
          onClick={onToggle}
          className="
            text-white 
            cursor-pointer 
            hover:underline
          "
        >
          {" "}
          Create an account
        </span>
      </p>
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={loginModal.isOpen}
      title="Login"
      actionLabel="Sign in"
      onClose={loginModal.onClose}
      onSubmit={onSubmit}
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default LoginModal;
