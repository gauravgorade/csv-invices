import React from "react";
import DefaultLayout from "../layout/DefaultLayout";
import Breadcrumb from "../components/Breadcrumb";

const InvoiceDetails = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Invoice Details" />
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-end">
        <button
          class="inline-flex items-center gap-2.5 rounded bg-primary px-4 py-[7px] font-medium text-white hover:bg-opacity-90"
          fdprocessedid="fna92"
        >
          <svg
            class="fill-current"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.3419 4.66885L11.5204 0.843848C11.2988 0.618848 10.9942 0.506348 10.6896 0.506348H4.04344C3.10191 0.506348 2.29883 1.29385 2.29883 2.27822V8.8876C2.29883 9.2251 2.57575 9.53447 2.93575 9.53447C3.29575 9.53447 3.57267 9.25322 3.57267 8.8876V2.2501C3.57267 1.96885 3.79421 1.74385 4.07114 1.74385H10.3296V5.34385C10.3296 5.68135 10.6065 5.99072 10.9665 5.99072H14.4834V8.71885C14.4834 9.05635 14.7604 9.36572 15.1204 9.36572C15.4804 9.36572 15.7573 9.08447 15.7573 8.71885V5.5126C15.6742 5.20322 15.5634 4.89385 15.3419 4.66885ZM11.5481 2.64385L13.625 4.7251H11.5481V2.64385Z"
              fill=""
            ></path>
            <path
              d="M15.0653 14.5688C14.733 14.5688 14.4284 14.8501 14.4284 15.2157V15.7782C14.4284 16.0595 14.2069 16.2845 13.9299 16.2845H4.04379C3.76687 16.2845 3.54533 16.0595 3.54533 15.7782V15.3845C3.54533 15.047 3.26841 14.7376 2.90841 14.7376C2.54841 14.7376 2.27148 15.0188 2.27148 15.3845V15.7501C2.27148 16.7063 3.04687 17.522 4.0161 17.522H13.9023C14.8438 17.522 15.6469 16.7345 15.6469 15.7501V15.1876C15.6746 14.8501 15.3976 14.5688 15.0653 14.5688Z"
              fill=""
            ></path>
            <path
              d="M12.6014 10.6875H14.1245C14.4568 10.6875 14.7614 10.4063 14.7614 10.0407C14.7614 9.67505 14.4845 9.3938 14.1245 9.3938H12.6014C11.8537 9.3938 11.2168 10.0407 11.2168 10.8V14.2032C11.2168 14.5407 11.4937 14.85 11.8537 14.85C12.2137 14.85 12.4906 14.5688 12.4906 14.2032V12.4313H13.543C13.8753 12.4313 14.1799 12.15 14.1799 11.7844C14.1799 11.4188 13.903 11.1375 13.543 11.1375H12.463V10.7719C12.463 10.7719 12.5183 10.6875 12.6014 10.6875Z"
              fill=""
            ></path>
            <path
              d="M8.8346 14.8782C9.80383 14.8782 10.6069 14.0626 10.6069 13.0501V11.1938C10.6069 10.1813 9.80383 9.36572 8.8346 9.36572H7.56075C7.22844 9.36572 6.92383 9.64697 6.92383 10.0126V14.2595C6.92383 14.597 7.20075 14.9063 7.56075 14.9063H8.8346V14.8782ZM8.16998 10.6313H8.8069C9.08383 10.6313 9.33306 10.8845 9.33306 11.1938V13.0501C9.33306 13.3595 9.08383 13.6126 8.8069 13.6126H8.16998V10.6313Z"
              fill=""
            ></path>
            <path
              d="M3.87716 14.8782C4.20947 14.8782 4.51408 14.5969 4.51408 14.2313V12.5438H5.871C6.20331 12.5438 6.50793 12.2625 6.50793 11.8969V10.0407C6.50793 9.70317 6.231 9.3938 5.871 9.3938H3.87716C3.54485 9.3938 3.24023 9.67505 3.24023 10.0407V14.2313C3.26793 14.5969 3.54485 14.8782 3.87716 14.8782ZM4.51408 10.6875H5.23408V11.2782H4.51408V10.6875Z"
              fill=""
            ></path>
          </svg>
          Edit Order
        </button>
      </div>
      <div class="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div class="border-b border-stroke px-4 py-4 dark:border-strokedark sm:px-6 xl:px-9">
          <h3 class="font-medium text-black dark:text-white">Style 2</h3>
        </div>
        <div class="p-4 sm:p-6 xl:p-9">
          <div>
            
            <div class="flex flex-wrap justify-between gap-5">
              <div>
                <p class="mb-1.5 font-medium text-black dark:text-white">
                  Billing From:
                </p>
                <h4 class="mb-3 text-xl font-bold text-black dark:text-white">
                  Super Technologies
                </h4>
                <a class="block" href="/invoice">
                  <span class="font-medium text-black dark:text-white">
                    Email:{" "}
                  </span>
                  contact@example.com
                </a>
                <span class="mt-1.5 block">
                  <span class="font-medium text-black dark:text-white">
                    Address:{" "}
                  </span>
                  2972 Westheimer Rd. Santa Ana.
                </span>
              </div>
              <div>
                <p class="mb-1.5 font-medium text-black dark:text-white">
                  Billing To:
                </p>
                <h4 class="mb-3 text-xl font-bold text-black dark:text-white">
                  Devid wilium
                </h4>
                <a class="block" href="/invoice">
                  <span class="font-medium text-black dark:text-white">
                    Email:{" "}
                  </span>
                  contact@example.com
                </a>
                <span class="mt-1.5 block">
                  <span class="font-medium text-black dark:text-white">
                    Address:{" "}
                  </span>
                  New York, USA 2707 Davis Anenue
                </span>
              </div>
            </div>
            <div class="my-7.5 grid grid-cols-1 border border-stroke dark:border-strokedark xsm:grid-cols-2 sm:grid-cols-4">
              <div class="border-b border-r border-stroke px-5 py-4 last:border-r-0 dark:border-strokedark sm:border-b-0">
                <h5 class="mb-1.5 font-bold text-black dark:text-white">
                  Invoice ID :
                </h5>
                <span class="text-sm font-medium"> #STK83084398239 </span>
              </div>
              <div class="border-b border-stroke px-5 py-4 last:border-r-0 dark:border-strokedark sm:border-b-0 sm:border-r">
                <h5 class="mb-1.5 font-bold text-black dark:text-white">
                  Date Issued :
                </h5>
                <span class="text-sm font-medium"> 29, Nov 2027 </span>
              </div>
              <div class="border-b border-r border-stroke px-5 py-4 last:border-r-0 dark:border-strokedark xsm:border-b-0">
                <h5 class="mb-1.5 font-bold text-black dark:text-white">
                  Due Date :
                </h5>
                <span class="text-sm font-medium"> 29, Dec 2027 </span>
              </div>
              <div class="border-r border-stroke px-5 py-4 last:border-r-0 dark:border-strokedark">
                <h5 class="mb-1.5 font-bold text-black dark:text-white">
                  Due Amount :
                </h5>
                <span class="text-sm font-medium"> $2,578.90 </span>
              </div>
            </div>
            <div class="border border-stroke dark:border-strokedark">
              <div class="max-w-full overflow-x-auto">
                <div class="min-w-[670px]">
                  <div class="grid grid-cols-12 border-b border-stroke py-3.5 pl-5 pr-6 dark:border-strokedark">
                    <div class="col-span-3">
                      <h5 class="font-medium text-black dark:text-white">
                        Brand name
                      </h5>
                    </div>
                    <div class="col-span-4">
                      <h5 class="font-medium text-black dark:text-white">
                        Description
                      </h5>
                    </div>
                    <div class="col-span-2">
                      <h5 class="font-medium text-black dark:text-white">
                        Quantity
                      </h5>
                    </div>
                    <div class="col-span-2">
                      <h5 class="font-medium text-black dark:text-white">
                        Price Per Unit
                      </h5>
                    </div>
                    <div class="col-span-1">
                      <h5 class="text-right font-medium text-black dark:text-white">
                        Total
                      </h5>
                    </div>
                  </div>
                  <div class="grid grid-cols-12 border-b border-stroke py-3.5 pl-5 pr-6 dark:border-strokedark">
                    <div class="col-span-3">
                      <p class="font-medium">Techno</p>
                    </div>
                    <div class="col-span-4">
                      <p class="font-medium">Kemon 24 smart phone</p>
                    </div>
                    <div class="col-span-2">
                      <p class="font-medium">1</p>
                    </div>
                    <div class="col-span-2">
                      <p class="font-medium">$200</p>
                    </div>
                    <div class="col-span-1">
                      <p class="text-right font-medium">$200</p>
                    </div>
                  </div>
                  <div class="grid grid-cols-12 border-b border-stroke py-3.5 pl-5 pr-6 dark:border-strokedark">
                    <div class="col-span-3">
                      <p class="font-medium">Vivo</p>
                    </div>
                    <div class="col-span-4">
                      <p class="font-medium">Vivo 32 smart phone</p>
                    </div>
                    <div class="col-span-2">
                      <p class="font-medium">3</p>
                    </div>
                    <div class="col-span-2">
                      <p class="font-medium">$300</p>
                    </div>
                    <div class="col-span-1">
                      <p class="text-right font-medium">$900</p>
                    </div>
                  </div>
                  <div class="grid grid-cols-12 border-b border-stroke py-3.5 pl-5 pr-6 dark:border-strokedark">
                    <div class="col-span-3">
                      <p class="font-medium">Samsung</p>
                    </div>
                    <div class="col-span-4">
                      <p class="font-medium">S23 Ultra</p>
                    </div>
                    <div class="col-span-2">
                      <p class="font-medium">1</p>
                    </div>
                    <div class="col-span-2">
                      <p class="font-medium">$1300</p>
                    </div>
                    <div class="col-span-1">
                      <p class="text-right font-medium">$1300</p>
                    </div>
                  </div>
                  <div class="grid grid-cols-12 border-b border-stroke py-3.5 pl-5 pr-6 dark:border-strokedark">
                    <div class="col-span-3">
                      <p class="font-medium">Apple</p>
                    </div>
                    <div class="col-span-4">
                      <p class="font-medium">iPhone 15Pro Max</p>
                    </div>
                    <div class="col-span-2">
                      <p class="font-medium">2</p>
                    </div>
                    <div class="col-span-2">
                      <p class="font-medium">$1200</p>
                    </div>
                    <div class="col-span-1">
                      <p class="text-right font-medium">$2400</p>
                    </div>
                  </div>
                  <div class="grid grid-cols-12 border-b border-stroke py-3.5 pl-5 pr-6 dark:border-strokedark">
                    <div class="col-span-3">
                      <p class="font-medium">Oppo</p>
                    </div>
                    <div class="col-span-4">
                      <p class="font-medium">Fold X</p>
                    </div>
                    <div class="col-span-2">
                      <p class="font-medium">1</p>
                    </div>
                    <div class="col-span-2">
                      <p class="font-medium">$900</p>
                    </div>
                    <div class="col-span-1">
                      <p class="text-right font-medium">$900</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex justify-end p-6">
                <div class="max-w-65 w-full">
                  <div class="flex flex-col gap-4">
                    <p class="flex justify-between font-medium text-black dark:text-white">
                      <span> Subtotal </span>
                      <span> $4700 </span>
                    </p>
                    <p class="flex justify-between font-medium text-black dark:text-white">
                      <span> Shipping Cost (+) </span>
                      <span> $10.00 </span>
                    </p>
                    <p class="flex justify-between font-medium text-black dark:text-white">
                      <span>
                        Coupon Discount<span class="text-meta-3">(10%)</span>
                      </span>
                      <span> $470 </span>
                    </p>
                    <p class="flex justify-between font-medium text-black dark:text-white">
                      <span>
                        {" "}
                        Vat <span class="text-red">(5%)</span>{" "}
                      </span>
                      <span> $235 </span>
                    </p>
                  </div>
                  <p class="mt-4 flex justify-between border-t border-stroke pt-5 dark:border-strokedark">
                    <span class="font-medium text-black dark:text-white">
                      Total
                    </span>
                    <span class="font-bold text-meta-3"> $4475 </span>
                  </p>
                  <button
                    class="float-right mt-10 inline-flex items-center gap-2.5 rounded bg-primary px-7.5 py-2.5 font-medium text-white hover:bg-opacity-90"
                    fdprocessedid="sjugv5"
                  >
                    Download
                    <svg
                      class="fill-current"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_1878_13706)">
                        <path
                          d="M16.8754 12.375C16.5379 12.375 16.2285 12.6562 16.2285 13.0219V15.525C16.2285 15.7781 16.0316 15.975 15.7785 15.975H2.22227C1.96914 15.975 1.77227 15.7781 1.77227 15.525V13.0219C1.77227 12.6562 1.46289 12.375 1.12539 12.375C0.787891 12.375 0.478516 12.6562 0.478516 13.0219V15.525C0.478516 16.4812 1.23789 17.2406 2.19414 17.2406H15.7785C16.7348 17.2406 17.4941 16.4812 17.4941 15.525V13.0219C17.5223 12.6562 17.2129 12.375 16.8754 12.375Z"
                          fill=""
                        ></path>
                        <path
                          d="M8.55055 13.078C8.66305 13.1905 8.8318 13.2468 9.00055 13.2468C9.1693 13.2468 9.30992 13.1905 9.45054 13.078L13.5287 9.1124C13.7818 8.85928 13.7818 8.46553 13.5287 8.2124C13.2755 7.95928 12.8818 7.95928 12.6287 8.2124L9.64742 11.1374V1.40615C9.64742 1.06865 9.36617 0.759277 9.00055 0.759277C8.66305 0.759277 8.35367 1.04053 8.35367 1.40615V11.1374L5.37242 8.2124C5.1193 7.95928 4.72555 7.9874 4.47242 8.2124C4.2193 8.46553 4.24742 8.85928 4.47242 9.1124L8.55055 13.078Z"
                          fill=""
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_1878_13706">
                          <rect width="18" height="18" fill="white"></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default InvoiceDetails;
