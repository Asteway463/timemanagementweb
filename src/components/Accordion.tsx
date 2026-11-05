"use client";

import { useId, useState, type ReactNode } from "react";
import { Icon } from "@/components/icons";
import { cn } from "@/lib/utils";

export type AccordionItem = {
  id: string;
  title: string;
  content: ReactNode;
};

export function Accordion({
  items,
  allowMultiple = false,
  defaultOpenId,
  className,
}: {
  items: AccordionItem[];
  allowMultiple?: boolean;
  defaultOpenId?: string;
  className?: string;
}) {
  const baseId = useId();
  const [openIds, setOpenIds] = useState<string[]>(
    defaultOpenId ? [defaultOpenId] : [],
  );

  function toggle(id: string) {
    setOpenIds((previous) => {
      if (previous.includes(id)) {
        return previous.filter((item) => item !== id);
      }
      return allowMultiple ? [...previous, id] : [id];
    });
  }

  return (
    <div className={cn("w-full", className)}>
      {items.map((item, index) => {
        const isOpen = openIds.includes(item.id);
        const triggerId = `${baseId}-trigger-${index}`;
        const panelId = `${baseId}-panel-${index}`;

        return (
          <div key={item.id} className="accordion-item">
            <h3>
              <button
                type="button"
                id={triggerId}
                className="accordion-trigger"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(item.id)}
              >
                <span>{item.title}</span>
                <span className="accordion-icon" aria-hidden="true">
                  <Icon name="plus" size={15} strokeWidth={2} />
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              className="accordion-panel"
              data-open={isOpen}
              role="region"
              aria-labelledby={triggerId}
              inert={!isOpen}
            >
              <div>
                <div className="pb-5 pr-8 text-[0.93rem] leading-relaxed text-muted">
                  {item.content}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
