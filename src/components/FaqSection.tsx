import { Accordion } from "@/components/Accordion";
import { Icon } from "@/components/icons";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { faqs, siteConfig } from "@/config/site";
import { contactHref } from "@/lib/utils";

export function FaqSection() {
  const contact = contactHref(siteConfig.contactEmail);

  return (
    <section id="faq" className="section scroll-mt-24">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-[0.38fr_0.62fr] lg:gap-16">
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <SectionHeading
                eyebrow="FAQ"
                title="Questions, answered."
                description="The short version: it is free, it is private, and everything works offline."
                align="left"
              />
              <div className="mt-7 flex items-start gap-3 rounded-2xl border border-line/12 bg-surface/40 p-4">
                <span className="grid h-9 w-9 flex-none place-items-center rounded-xl border border-lavender/15 bg-brand/10 text-lavender">
                  <Icon name="mail" size={16} strokeWidth={1.8} />
                </span>
                <div>
                  <p className="text-[0.86rem] font-medium text-ink">
                    Still curious?
                  </p>
                  <p className="mt-1 text-[0.78rem] leading-relaxed text-muted">
                    {contact ? (
                      <>
                        Send a note to{" "}
                        <a
                          href={contact}
                          className="text-lavender underline underline-offset-2"
                        >
                          {siteConfig.contactEmail}
                        </a>
                        .
                      </>
                    ) : (
                      "A contact address will be added before launch."
                    )}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={90}>
            <div className="border-t border-line/12">
              <Accordion
                allowMultiple
                items={faqs.map((faq, index) => ({
                  id: `faq-${index}`,
                  title: faq.question,
                  content: <p>{faq.answer}</p>,
                }))}
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
