"use client";

import { X } from "lucide-react";
import {
  useEffect,
  useId,
  useRef,
  type FormEvent,
} from "react";
import styles from "./ApplicationDialog.module.css";

/** Стабильный id для `popoverTarget` у кнопок на странице */
export const APPLICATION_DIALOG_ID = "application-dialog";

const FOCUSABLE_SELECTOR =
  'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

function getFocusableIn(container: HTMLElement): HTMLElement[] {
  return [...container.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)].filter(
    (node) =>
      !node.hidden &&
      node.getAttribute("aria-hidden") !== "true" &&
      node.tabIndex !== -1
  );
}

export function ApplicationDialog() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();
  const scrollLockedRef = useRef(false);
  const focusBeforeOpenRef = useRef<Element | null>(null);
  const dialogOpenRef = useRef(false);

  useEffect(() => {
    const el = dialogRef.current;
    if (!el) return;

    const lockScroll = () => {
      if (scrollLockedRef.current) return;
      scrollLockedRef.current = true;
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    };

    const unlockScroll = () => {
      if (!scrollLockedRef.current) return;
      scrollLockedRef.current = false;
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };

    let removeFocusTrap: (() => void) | undefined;

    const onToggle = (e: Event) => {
      if (!("newState" in e) || typeof (e as ToggleEvent).newState !== "string") {
        return;
      }
      const { newState } = e as ToggleEvent;

      if (newState === "open") {
        dialogOpenRef.current = true;
        lockScroll();
        removeFocusTrap?.();
        removeFocusTrap = undefined;

        focusBeforeOpenRef.current = document.activeElement;

        const installTrap = () => {
          const focusables = getFocusableIn(el);
          const first = focusables[0];
          const last = focusables[focusables.length - 1];

            const onKeyDown = (ke: KeyboardEvent) => {
            if (ke.key !== "Tab") return;
            const focusablesNow = getFocusableIn(el);
            if (focusablesNow.length === 0) return;
            const f = focusablesNow[0];
            const l = focusablesNow[focusablesNow.length - 1];
            const active = document.activeElement as HTMLElement | null;

            if (!active || !el.contains(active)) {
              ke.preventDefault();
              f?.focus();
              return;
            }

            if (focusablesNow.length === 1) {
              ke.preventDefault();
              f.focus();
              return;
            }

            if (ke.shiftKey) {
              if (active === f) {
                ke.preventDefault();
                l?.focus();
              }
            } else if (active === l) {
              ke.preventDefault();
              f?.focus();
            }
          };

          const onFocusIn = (fe: FocusEvent) => {
            const target = fe.target as Node | null;
            if (!target || el.contains(target)) return;
            queueMicrotask(() => {
              if (!dialogOpenRef.current) return;
              const list = getFocusableIn(el);
              list[0]?.focus();
            });
          };

          document.addEventListener("keydown", onKeyDown);
          document.addEventListener("focusin", onFocusIn, true);

          removeFocusTrap = () => {
            document.removeEventListener("keydown", onKeyDown);
            document.removeEventListener("focusin", onFocusIn, true);
          };

          queueMicrotask(() => {
            first?.focus();
          });
        };

        installTrap();
      } else {
        dialogOpenRef.current = false;
        removeFocusTrap?.();
        removeFocusTrap = undefined;
        unlockScroll();

        const toRestore = focusBeforeOpenRef.current;
        focusBeforeOpenRef.current = null;
        if (toRestore instanceof HTMLElement) {
          queueMicrotask(() => toRestore.focus());
        }
      }
    };

    el.addEventListener("toggle", onToggle);
    return () => {
      el.removeEventListener("toggle", onToggle);
      removeFocusTrap?.();
      unlockScroll();
    };
  }, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    dialogRef.current?.hidePopover();
    form.reset();
  };

  const fieldId = (name: string) => `${APPLICATION_DIALOG_ID}-${name}`;

  return (
    <dialog
      ref={dialogRef}
      id={APPLICATION_DIALOG_ID}
      popover="auto"
      className={styles.dialog}
      aria-labelledby={titleId}
      aria-modal="true"
    >
      <div className={styles.inner}>
        <div className={styles.header}>
          <h2 id={titleId} className={styles.title}>
            Подать заявку
          </h2>
          <button
            type="button"
            className={styles.closeBtn}
            popoverTarget={APPLICATION_DIALOG_ID}
            popoverTargetAction="hide"
            aria-label="Закрыть окно"
          >
            <X className="size-5" aria-hidden />
          </button>
        </div>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.field}>
            <label className={styles.label} htmlFor={fieldId("name")}>
              ФИО
            </label>
            <input
              id={fieldId("name")}
              className={styles.input}
              name="name"
              type="text"
              autoComplete="name"
              required
              placeholder="Иванов Иван Иванович"
            />
          </div>
          <div className={styles.field}>
            <label className={styles.label} htmlFor={fieldId("phone")}>
              Телефон
            </label>
            <input
              id={fieldId("phone")}
              className={styles.input}
              name="phone"
              type="tel"
              autoComplete="tel"
              required
              placeholder="+7 (___) ___-__-__"
            />
          </div>
          <div className={styles.field}>
            <label className={styles.label} htmlFor={fieldId("email")}>
              Электронная почта
            </label>
            <input
              id={fieldId("email")}
              className={styles.input}
              name="email"
              type="email"
              autoComplete="email"
              placeholder="name@example.com"
            />
          </div>
          <div className={styles.field}>
            <label className={styles.label} htmlFor={fieldId("message")}>
              Комментарий
            </label>
            <textarea
              id={fieldId("message")}
              className={styles.textarea}
              name="message"
              rows={4}
              placeholder="Вопрос или пожелание (необязательно)"
            />
          </div>
          <div className={styles.actions}>
            <button type="submit" className={styles.submitBtn}>
              Отправить
            </button>
            <button
              type="button"
              className={styles.cancelBtn}
              popoverTarget={APPLICATION_DIALOG_ID}
              popoverTargetAction="hide"
            >
              Отмена
            </button>
          </div>
        </form>
      </div>
    </dialog>
  );
}
