"use client";

import { useId, useState } from "react";

import { subscribePublicEmail } from "@/app/_lib/public-subscribers.client";
import { getFooterSubscriptionCopy, type Locale } from "@/app/_lib/i18n";

type SubmissionResult =
  | null
  | "success"
  | "invalid_email"
  | "site_not_found"
  | "network_error"
  | "unknown_error";

export function FooterSubscription({ locale }: { locale: Locale }) {
  const copy = getFooterSubscriptionCopy(locale);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<SubmissionResult>(null);
  const inputId = useId();
  const statusId = useId();
  const hasError =
    result === "invalid_email" ||
    result === "site_not_found" ||
    result === "network_error" ||
    result === "unknown_error";

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (isSubmitting) {
      return;
    }

    setIsSubmitting(true);
    const nextResult = await subscribePublicEmail({ email: email.trim(), locale });
    setIsSubmitting(false);
    setResult(nextResult.status);

    if (nextResult.status === "success") {
      setEmail("");
    }
  }

  function getStatusMessage() {
    switch (result) {
      case "success":
        return copy.success;
      case "invalid_email":
        return copy.invalidEmail;
      case "site_not_found":
        return copy.siteUnavailable;
      case "network_error":
      case "unknown_error":
        return copy.networkError;
      default:
        return "";
    }
  }

  return (
    <section className="footer-subscription" aria-labelledby={`${inputId}-title`}>
      <h5 id={`${inputId}-title`}>{copy.title}</h5>
      <p className="footer-subscription-body">{copy.body}</p>

      <form className="footer-subscription-form" onSubmit={handleSubmit}>
        <label className="footer-subscription-label" htmlFor={inputId}>
          {copy.emailLabel}
        </label>
        <input
          id={inputId}
          className="footer-subscription-input"
          type="email"
          inputMode="email"
          autoComplete="email"
          placeholder={copy.emailPlaceholder}
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
            if (result) {
              setResult(null);
            }
          }}
          disabled={isSubmitting}
          required
          aria-invalid={hasError}
          aria-describedby={statusId}
        />
        <button className="footer-subscription-button" type="submit" disabled={isSubmitting}>
          {isSubmitting ? copy.submitting : copy.submit}
        </button>
      </form>

      <p
        id={statusId}
        className={hasError ? "footer-subscription-status is-error" : "footer-subscription-status"}
        aria-live="polite"
      >
        {getStatusMessage()}
      </p>
    </section>
  );
}
