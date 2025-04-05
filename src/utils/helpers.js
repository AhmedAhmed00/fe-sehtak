// import { formatDistance, parseISO } from 'date-fns';
// import { differenceInDays } from 'date-fns/esm';
// // import * as jose from 'jose'

import { format } from "date-fns";
import { InvoiceStatuses, priorities, statuses } from "../data/selectData";
import { ar } from "date-fns/locale";


// // We want to make this function work for both Date objects and strings (which come from Supabase)
// export const subtractDates = (dateStr1, dateStr2) =>
//   differenceInDays(parseISO(String(dateStr1)), parseISO(String(dateStr2)));

// export const formatDistanceFromNow = (dateStr) =>
//   formatDistance(parseISO(dateStr), new Date(), {
//     addSuffix: true,
//   })
//     .replace('about ', '')
//     .replace('in', 'In');

// // Supabase needs an ISO date string. However, that string will be different on every render because the MS or SEC have changed, which isn't good. So we use this trick to remove any time
// export const getToday = function (options = {}) {
//   const today = new Date();

//   // This is necessary to compare with created_at from Supabase, because it it not at 0.0.0.0, so we need to set the date to be END of the day when we compare it with earlier dates
//   if (options?.end)
//     // Set to the last second of the day
//     today.setUTCHours(23, 59, 59, 999);
//   else today.setUTCHours(0, 0, 0, 0);
//   return today.toISOString();
// };

// export const formatCurrency = (value) =>
//   new Intl.NumberFormat('en', { style: 'currency', currency: 'USD' }).format(
//     value
//   );



// middleware

// export const withAuth = (...data) => async (config) => { 
//   const token = config.headers.Authorization?.split(" ")[1]; // extract token form requst
//   const verified = token ? await verifyToken(token) : false;

//   if (!verified) { 
//     return [403, { message: "not verified" }];
//   }


//   return typeof data[0] ==="function" ?data[0](config):data

// };

// export const verifyToken = async (token ,options=undefined) => { 
// try{
//     const verfication =  await jose.jwtVerify(token , JwtSecret)
//   return options?.returnPayload ? verfication.payload : true
// }
// catch{ 
//   return false
// }

// }



export function setServerErrors(error, setError) { 
    if (error?.data) {
        Object.keys(error.data).forEach((field) => {
            const fieldError = error.data[field];

            // Extract `detail` if it's an object
            const errorMessage = typeof fieldError === "object" && fieldError.detail
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


export function getStatusName(status ) { 
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
    Object.entries(obj).filter(([_, value]) => 
      value !== undefined && value !== null && value !== "" && 
      !(Array.isArray(value) && value.length === 0)
    )
  );
}






export const formatDateToArabic = (date) => {
  const formattedDate = format(date, "d MMMM yyyy", { locale: ar });
  return formattedDate.replace(/\d/g, (digit) => "٠١٢٣٤٥٦٧٨٩"[digit]);
};


export  function formatYearToArabic(yearString) {
  return new Intl.NumberFormat("ar-EG", { useGrouping: false }).format(yearString);
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



