import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { ServerRouter, useMatches, useActionData, useLoaderData, useParams, useRouteError, Meta, Links, ScrollRestoration, Scripts, Outlet, isRouteErrorResponse } from "react-router";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { createElement, useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { FaFacebookF, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
const streamTimeout = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, routerContext, loadContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    let userAgent = request.headers.get("user-agent");
    let readyOption = userAgent && isbot(userAgent) || routerContext.isSpaMode ? "onAllReady" : "onShellReady";
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(ServerRouter, { context: routerContext, url: request.url }),
      {
        [readyOption]() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
    setTimeout(abort, streamTimeout + 1e3);
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest,
  streamTimeout
}, Symbol.toStringTag, { value: "Module" }));
function withComponentProps(Component) {
  return function Wrapped() {
    const props = {
      params: useParams(),
      loaderData: useLoaderData(),
      actionData: useActionData(),
      matches: useMatches()
    };
    return createElement(Component, props);
  };
}
function withErrorBoundaryProps(ErrorBoundary3) {
  return function Wrapped() {
    const props = {
      params: useParams(),
      loaderData: useLoaderData(),
      actionData: useActionData(),
      error: useRouteError()
    };
    return createElement(ErrorBoundary3, props);
  };
}
const links = () => [{
  rel: "preconnect",
  href: "https://fonts.googleapis.com"
}, {
  rel: "preconnect",
  href: "https://fonts.gstatic.com",
  crossOrigin: "anonymous"
}, {
  rel: "stylesheet",
  href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
}];
function Layout({
  children
}) {
  return /* @__PURE__ */ jsxs("html", {
    lang: "en",
    children: [/* @__PURE__ */ jsxs("head", {
      children: [/* @__PURE__ */ jsx("meta", {
        charSet: "utf-8"
      }), /* @__PURE__ */ jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), /* @__PURE__ */ jsx(Meta, {}), /* @__PURE__ */ jsx(Links, {})]
    }), /* @__PURE__ */ jsxs("body", {
      children: [children, /* @__PURE__ */ jsx(ScrollRestoration, {}), /* @__PURE__ */ jsx(Scripts, {})]
    })]
  });
}
const root = withComponentProps(function App() {
  return /* @__PURE__ */ jsx(Outlet, {});
});
const ErrorBoundary = withErrorBoundaryProps(function ErrorBoundary2({
  error
}) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack;
  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details = error.status === 404 ? "The requested page could not be found." : error.statusText || details;
  }
  return /* @__PURE__ */ jsxs("main", {
    className: "pt-16 p-4 container mx-auto",
    children: [/* @__PURE__ */ jsx("h1", {
      children: message
    }), /* @__PURE__ */ jsx("p", {
      children: details
    }), stack]
  });
});
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary,
  Layout,
  default: root,
  links
}, Symbol.toStringTag, { value: "Module" }));
function HeroSection() {
  return /* @__PURE__ */ jsxs("div", { className: "relative w-full h-screen overflow-hidden flex items-center justify-center", children: [
    /* @__PURE__ */ jsx(
      "video",
      {
        autoPlay: true,
        muted: true,
        loop: true,
        className: "absolute top-0 left-0 w-full h-full object-cover brightness-50 blur-sm",
        children: /* @__PURE__ */ jsx("source", { src: "/images/invideo.mp4", type: "video/mp4" })
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "relative z-10 text-center text-white px-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex justify-center items-center space-x-4 mb-4", children: [
        /* @__PURE__ */ jsx("img", { src: "/images/logo.png", alt: "Evently Logo", className: "h-16 sm:h-20" }),
        /* @__PURE__ */ jsx("img", { src: "/images/textlogo.png", alt: "Evently Logo", className: "h-12 sm:h-16" })
      ] }),
      /* @__PURE__ */ jsx("h1", { className: "text-3xl sm:text-5xl font-bold uppercase tracking-wide", children: "DISCOVER. CONNECT. CELEBRATE." }),
      /* @__PURE__ */ jsx("p", { className: "mt-2 sm:mt-4 text-lg sm:text-xl", children: "Your All-in-One Destination for Fast, Affordable, and Seamless Event Booking & Fest Solutions!" }),
      /* @__PURE__ */ jsxs("div", { className: "mt-6 flex justify-center space-x-4", children: [
        /* @__PURE__ */ jsx("a", { href: "#", className: "px-4 py-2 bg-yellow-400 text-black rounded-lg hover:bg-blue-800 hover:text-white", children: "List Your Event" }),
        /* @__PURE__ */ jsx("a", { href: "#", className: "px-4 py-2 bg-yellow-400 text-black rounded-lg hover:bg-blue-800 hover:text-white", children: "Find Your Ticket" })
      ] })
    ] })
  ] });
}
const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return /* @__PURE__ */ jsxs("header", { className: "fixed top-0 left-0 w-full bg-blue-600 shadow-md z-50", children: [
    /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between py-4", children: [
      /* @__PURE__ */ jsx("a", { href: "/home", className: "text-lg font-semibold text-gray-900", children: /* @__PURE__ */ jsx("img", { src: "/images/logo.png", alt: "Evently Logo", className: "h-10 w-auto" }) }),
      /* @__PURE__ */ jsxs("nav", { className: "hidden lg:flex gap-x-8", children: [
        /* @__PURE__ */ jsx("a", { href: "#", className: "text-white hover:text-yellow-400", children: "Home" }),
        /* @__PURE__ */ jsx("a", { href: "#", className: "text-white hover:text-yellow-400", children: "Religious Event" }),
        /* @__PURE__ */ jsx("a", { href: "#", className: "text-white hover:text-yellow-400", children: "Sponsors For Event" }),
        /* @__PURE__ */ jsx("a", { href: "#", className: "text-white hover:text-yellow-400", children: "Wall of Love" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "hidden lg:flex gap-x-4", children: [
        /* @__PURE__ */ jsx("a", { href: "#", className: "px-4 py-2 bg-yellow-400 text-black rounded-lg hover:bg-blue-800 hover:text-white", children: "List Your Event" }),
        /* @__PURE__ */ jsx("a", { href: "#", className: "px-4 py-2 bg-yellow-400 text-black rounded-lg hover:bg-blue-800 hover:text-white", children: "Find Your Event" })
      ] }),
      /* @__PURE__ */ jsx("button", { className: "lg:hidden", onClick: () => setMobileMenuOpen(true), children: /* @__PURE__ */ jsx(Bars3Icon, { className: "h-8 w-8 text-black" }) })
    ] }),
    /* @__PURE__ */ jsx(Dialog, { open: mobileMenuOpen, onClose: () => setMobileMenuOpen(false), className: "lg:hidden", children: /* @__PURE__ */ jsxs("div", { className: "fixed inset-y-0 right-0 w-64 bg-blue-600 shadow-xl p-4 flex flex-col z-50", children: [
      /* @__PURE__ */ jsx("button", { onClick: () => setMobileMenuOpen(false), className: "self-end mb-4", children: /* @__PURE__ */ jsx(XMarkIcon, { className: "h-8 w-8 text-black" }) }),
      /* @__PURE__ */ jsxs("nav", { className: "flex flex-col space-y-4", children: [
        /* @__PURE__ */ jsx("a", { href: "#", className: "text-white hover:text-yellow-400", children: "Home" }),
        /* @__PURE__ */ jsx("a", { href: "#", className: "text-white hover:text-yellow-400", children: "Religious Event" }),
        /* @__PURE__ */ jsx("a", { href: "#", className: "text-white hover:text-yellow-400", children: "Sponsors For Event" }),
        /* @__PURE__ */ jsx("a", { href: "#", className: "text-white hover:text-yellow-400", children: "Wall of Love" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-auto flex flex-col gap-2", children: [
        /* @__PURE__ */ jsx("a", { href: "#", className: "px-4 py-2 bg-yellow-400 text-black rounded-lg hover:bg-blue-800 hover:text-white", children: "List Your Event" }),
        /* @__PURE__ */ jsx("a", { href: "#", className: "px-4 py-2 bg-yellow-400 text-black rounded-lg hover:bg-blue-800 hover:text-white", children: "Find Your Event" })
      ] })
    ] }) })
  ] });
};
function Footer() {
  return /* @__PURE__ */ jsxs(
    "footer",
    {
      className: "relative min-h-[300px] bg-cover bg-center text-white py-10",
      style: { backgroundImage: "url('/images/footer.jpg')" },
      children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 backdrop-blur-md bg-transparent" }),
        /* @__PURE__ */ jsxs("div", { className: "relative container mx-auto px-6 md:px-12 lg:px-20", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row justify-between items-start gap-8", children: [
            /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsxs("h2", { className: "text-2xl font-bold uppercase leading-tight text-white drop-shadow-md", children: [
                "Need Help? ",
                /* @__PURE__ */ jsx("br", {}),
                " Get In Touch"
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "text-gray-300", children: [
                /* @__PURE__ */ jsx("a", { href: "tel:+919304288699", className: "block hover:text-yellow-400 transition", children: "Call +91 9304288699" }),
                /* @__PURE__ */ jsx("a", { href: "mailto:support@evently.com", className: "block hover:text-yellow-400 transition", children: "support@evently.com" }),
                /* @__PURE__ */ jsx("a", { href: "#", className: "block hover:text-yellow-400 transition", children: "Raise A Ticket" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-white drop-shadow-md", children: "Join the Conversation" }),
              /* @__PURE__ */ jsxs("div", { className: "flex space-x-4", children: [
                /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-blue-500", children: /* @__PURE__ */ jsx(FaFacebookF, { size: 24 }) }),
                /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-blue-700", children: /* @__PURE__ */ jsx(FaLinkedin, { size: 24 }) }),
                /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-pink-500", children: /* @__PURE__ */ jsx(FaInstagram, { size: 24 }) }),
                /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-green-500", children: /* @__PURE__ */ jsx(FaWhatsapp, { size: 24 }) })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-3 text-sm text-gray-300", children: [
                /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-white", children: "Competition" }),
                /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-white", children: "Blog" }),
                /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-white", children: "Privacy Policy" }),
                /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-white", children: "Terms & Conditions" }),
                /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-white", children: "Pricing" }),
                /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-white", children: "Refund & Cancellation" }),
                /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-white", children: "Careers" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "border-t border-gray-500 w-full mt-12" }),
          /* @__PURE__ */ jsx("div", { className: "mt-8 text-center text-sm text-gray-300", children: "2020 - 2025 © Evently Pvt. Ltd. All rights reserved." })
        ] })
      ]
    }
  );
}
function meta({}) {
  return [{
    title: "Evently"
  }, {
    name: "Evently",
    content: "Welcome to Evently"
  }];
}
const home = withComponentProps(function Home() {
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx(Navbar, {}), /* @__PURE__ */ jsx(HeroSection, {}), /* @__PURE__ */ jsx(Footer, {})]
  });
});
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: home,
  meta
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "./assets/entry.client-Bum_W0TX.js", "imports": ["./assets/chunk-GNGMS2XR-BOZvdQC0.js", "./assets/index-puSMihhB.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": true, "module": "./assets/root-BUC-NNNi.js", "imports": ["./assets/chunk-GNGMS2XR-BOZvdQC0.js", "./assets/index-puSMihhB.js", "./assets/with-props-D1pAlVEB.js"], "css": ["./assets/root-BD1l95Op.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "hydrateFallbackModule": void 0 }, "routes/home": { "id": "routes/home", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "./assets/home-BV16Kwoq.js", "imports": ["./assets/with-props-D1pAlVEB.js", "./assets/chunk-GNGMS2XR-BOZvdQC0.js", "./assets/index-puSMihhB.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "hydrateFallbackModule": void 0 } }, "url": "./assets/manifest-9d11def1.js", "version": "9d11def1" };
const assetsBuildDirectory = "build\\client";
const basename = "/";
const future = { "unstable_middleware": false, "unstable_optimizeDeps": false, "unstable_splitRouteModules": false, "unstable_viteEnvironmentApi": false };
const ssr = true;
const isSpaMode = false;
const prerender = [];
const publicPath = "./";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/home": {
    id: "routes/home",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route1
  }
};
export {
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  prerender,
  publicPath,
  routes,
  ssr
};
