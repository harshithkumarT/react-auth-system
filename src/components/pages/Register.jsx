import AuthCard from "../auth/AuthCard";

const Register = () => {
  return (
    <AuthCard>
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-gray-900">
          Create your account
        </h1>

        <p className="mt-2 text-sm text-gray-600">
          Get started by creating your account.
        </p>
      </div>

      {/* Registration form */}
      <form className="mt-6 space-y-5">
        {/* Full name */}
        <div>
          <label
            htmlFor="fullName"
            className="block text-sm font-medium text-gray-700"
          >
            Full name
          </label>

          <input
            id="fullName"
            name="fullName"
            type="text"
            autoComplete="name"
            placeholder="John Doe"
            className="mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none transition focus:border-gray-900 focus:ring-2 focus:ring-gray-900/10"
          />
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="register-email"
            className="block text-sm font-medium text-gray-700"
          >
            Email address
          </label>

          <input
            id="register-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            className="mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none transition focus:border-gray-900 focus:ring-2 focus:ring-gray-900/10"
          />
        </div>

        {/* Password */}
        <div>
          <label
            htmlFor="register-password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>

          <input
            id="register-password"
            name="password"
            type="password"
            autoComplete="new-password"
            placeholder="Create a password"
            className="mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none transition focus:border-gray-900 focus:ring-2 focus:ring-gray-900/10"
          />

          <p className="mt-2 text-xs text-gray-500">
            Use at least 8 characters.
          </p>
        </div>

        {/* Confirm password */}
        <div>
          <label
            htmlFor="confirmPassword"
            className="block text-sm font-medium text-gray-700"
          >
            Confirm password
          </label>

          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            autoComplete="new-password"
            placeholder="Confirm your password"
            className="mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none transition focus:border-gray-900 focus:ring-2 focus:ring-gray-900/10"
          />
        </div>

        {/* Terms */}
        <label className="flex items-start gap-3">
          <input
            type="checkbox"
            name="terms"
            className="mt-0.5 h-4 w-4 rounded border-gray-300"
          />

          <span className="text-sm leading-5 text-gray-600">
            I agree to the{" "}
            <button
              type="button"
              className="font-medium text-gray-900 hover:underline"
            >
              Terms of Service
            </button>{" "}
            and{" "}
            <button
              type="button"
              className="font-medium text-gray-900 hover:underline"
            >
              Privacy Policy
            </button>
            .
          </span>
        </label>

        {/* Submit */}
        <button
          type="submit"
          className="w-full rounded-lg bg-gray-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
        >
          Create account
        </button>
      </form>

      {/* Login link */}
      <p className="mt-6 text-center text-sm text-gray-600">
        Already have an account?{" "}
        <button
          type="button"
          className="font-semibold text-gray-900 hover:underline"
        >
          Sign in
        </button>
      </p>
    </AuthCard>
  );
};

export default Register;