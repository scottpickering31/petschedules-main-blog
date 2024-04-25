"use client";
import { useSearchParams } from "next/navigation";
import SignupModalForm from "./signupmodalform";

function SignUpDialog() {
  const searchParams = useSearchParams();
  const modal = searchParams.get("modal");

  return (
    <>
      {modal && (
        <dialog className="fixed left-0 top-0 w-full h-full bg-black bg-opacity-50 z-50 overflow-auto backdrop-blur flex justify-center items-center">
          <div className="bg-white m-auto p-8 rounded-2xl w-1/3">
            <SignupModalForm />
            <div className="flex flex-col items-center"></div>
          </div>
        </dialog>
      )}
    </>
  );
}

export default SignUpDialog;
