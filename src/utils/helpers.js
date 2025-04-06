// import { formatDistance, parseISO } from 'date-fns';
// import { differenceInDays } from 'date-fns/esm';
// // import * as jose from 'jose'

import { format } from "date-fns";
import { InvoiceStatuses, priorities, statuses } from "../data/selectData";
import { ar } from "date-fns/locale";

export function setServerErrors(error, setError) {
  if (error?.data) {
    Object.keys(error.data).forEach((field) => {
      const fieldError = error.data[field];

      // Extract `detail` if it's an object
      const errorMessage =
        typeof fieldError === "object" && fieldError.detail
          ? fieldError.detail
          : fieldError || "Unknown error";

      setError(field, { type: "server", message: errorMessage });
    });
  }
}

export function getStatusPriority(status) {
  const foundStatus = priorities.find((s) => s.name === status);
  return foundStatus ? foundStatus.value : "";
}

export function getStatusName(status) {
  const foundStatus = statuses.find((s) => s.name === status);
  return foundStatus ? foundStatus.value : "";
}
export function getStatusInvoiceName(status) {
  const foundStatus = InvoiceStatuses.find((s) => s.value === status);
  return foundStatus ? foundStatus.name : "";
}

export function checkError(errors, field) {
  return errors?.[field]?.message ?? null;
}

export function filterObject(obj) {
  return Object.fromEntries(
    Object.entries(obj).filter(
      ([_, value]) =>
        value !== undefined &&
        value !== null &&
        value !== "" &&
        !(Array.isArray(value) && value.length === 0)
    )
  );
}

export const formatDateToArabic = (date) => {
  const formattedDate = format(date, "d MMMM yyyy", { locale: ar });
  return formattedDate.replace(/\d/g, (digit) => "٠١٢٣٤٥٦٧٨٩"[digit]);
};

export function formatYearToArabic(yearString) {
  return new Intl.NumberFormat("ar-EG", { useGrouping: false }).format(
    yearString
  );
}

export function prepareFormData(values) {
  const formData = new FormData();

  // Append non-file fields
  Object.entries(values).forEach(([key, value]) => {
    if (key !== "attachments") {
      formData.append(key, value);
    }
  });

  // Append all files under the same "attachments" key
  if (values.attachments && values.attachments.length > 0) {
    values.attachments.forEach((file) => {
      if (file instanceof File) {
        formData.append("attachments", file);
      }
    });
  }

  return formData;
}
