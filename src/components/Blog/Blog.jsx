import React from "react";

const Blog = () => {
  return (
    <div className="w-full md:w-8/12 my-5 md:mx-auto px-3 md:px-0">
      <h1 className="font-bold text-3xl my-5">Blog: </h1>
      <hr className="mb-16" />
      <div className="px-5">
        <h3 className="font-bold text-2xl mb-2">
          When should we use Context API?
        </h3>
        <p className="text-xl text-gray-500 mb-6">
          Ans: Normally for accessing data in different components we use the
          props drilling method. But it is so hard when some data needs to be
          accessible by many components at different nesting levels. On that
          time we can use the Context API.
        </p>
        <h3 className="font-bold text-2xl mb-2">What is Custom Hook?</h3>
        <p className="text-xl text-gray-500 mb-6">
          Ans: Hooks are reusable function. Custom hook is a function which we
          can create by our own way. In custom hook the name starts with "use"
          and it may call other Hooks.
        </p>
        <h3 className="font-bold text-2xl mb-2">What is useRef?</h3>
        <p className="text-xl text-gray-500 mb-6">
          Ans: useRef is a react Hook. It allows us to persist values between
          renders. It can be used to store a mutable value that does not cause a
          re-render when updated. We can also access the DOM element directly by
          it.
        </p>
        <h3 className="font-bold text-2xl mb-2">What is useMemo?</h3>
        <p className="text-xl text-gray-500 mb-6">
          Ans: The useMemo is a react hook. Which used to keep expensive,
          resource intensive functions from needlessly running. It also returns
          a memoized value of passed in resource-intensive function.
        </p>
      </div>
    </div>
  );
};

export default Blog;
