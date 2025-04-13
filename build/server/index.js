import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { ServerRouter, useMatches, useActionData, useLoaderData, useParams, useRouteError, Meta, Links, ScrollRestoration, Scripts, Outlet, isRouteErrorResponse } from "react-router";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { createElement, useState, useEffect } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { v4 } from "uuid";
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
function AuthPage() {
  const [isRegister, setIsRegister] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();
  const onSubmit = async (data) => {
    if (isRegister) {
      const userId = v4();
      const newUser = {
        ...data,
        userId
      };
      try {
        const apiUrl = void 0;
        const res = await fetch(`${apiUrl}/api/auth/register`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(newUser)
        });
        const result = await res.json();
        if (res.ok) {
          alert("✅ Registered Successfully!\nYour User ID: " + result.userId);
        } else {
          alert("❌ Error: " + result.error);
        }
      } catch (err) {
        console.error("Registration Error:", err);
        alert("❌ Something went wrong while registering.");
      }
    } else {
      alert("✅ Logged In Successfully!");
    }
    reset();
  };
  return /* @__PURE__ */ jsx("div", { className: "fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600", children: /* @__PURE__ */ jsxs(
    motion.div,
    {
      className: "w-full max-w-lg p-10 space-y-6 bg-white shadow-2xl rounded-2xl relative",
      initial: { opacity: 0, y: -50 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.5 },
      children: [
        /* @__PURE__ */ jsx("h2", { className: "text-center text-3xl font-bold text-gray-800", children: isRegister ? "Create an Account" : "Login to Evently" }),
        /* @__PURE__ */ jsxs("form", { className: "space-y-6", onSubmit: handleSubmit(onSubmit), children: [
          isRegister && /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { className: "block text-gray-700 font-medium", children: "Full Name" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                ...register("name", { required: isRegister }),
                type: "text",
                className: "w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 bg-black",
                placeholder: "John Doe"
              }
            ),
            errors.name && /* @__PURE__ */ jsx("p", { className: "text-red-500 text-sm", children: "Name is required" })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { className: "block text-gray-700 font-medium", children: "Email" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                ...register("email", { required: true, pattern: /^\S+@\S+$/i }),
                type: "email",
                className: "w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 bg-black text-white",
                placeholder: "example@email.com"
              }
            ),
            errors.email && /* @__PURE__ */ jsx("p", { className: "text-red-500 text-sm", children: "Valid email is required" })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { className: "block text-gray-700 font-medium", children: "Password" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                ...register("password", { required: true, minLength: 6 }),
                type: "password",
                className: "w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 bg-black text-white",
                placeholder: "••••••••"
              }
            ),
            errors.password && /* @__PURE__ */ jsx("p", { className: "text-red-500 text-sm", children: "Min 6 characters required" })
          ] }),
          /* @__PURE__ */ jsx(
            motion.button,
            {
              type: "submit",
              className: "w-full py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-lg hover:opacity-90 transition",
              whileTap: { scale: 0.95 },
              children: isRegister ? "Sign Up" : "Login"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "text-center text-gray-700", children: [
          isRegister ? "Already have an account?" : "Don't have an account?",
          " ",
          /* @__PURE__ */ jsx(
            "button",
            {
              className: "text-purple-600 font-semibold hover:underline",
              onClick: () => setIsRegister(!isRegister),
              children: isRegister ? "Login" : "Sign Up"
            }
          )
        ] })
      ]
    }
  ) });
}
const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
  return /* @__PURE__ */ jsxs("header", { className: "fixed top-0 left-0 w-full bg-blue-600 shadow-md z-50", children: [
    /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between py-4", children: [
      /* @__PURE__ */ jsx(Link, { to: "/", className: "text-lg font-semibold text-gray-900", children: /* @__PURE__ */ jsx("img", { src: "/images/logo.png", alt: "Evently Logo", className: "h-10 w-auto" }) }),
      /* @__PURE__ */ jsxs("nav", { className: "hidden lg:flex gap-x-8", children: [
        /* @__PURE__ */ jsx(Link, { to: "/", className: "text-white hover:text-yellow-400", children: "Home" }),
        /* @__PURE__ */ jsx(Link, { to: "/", className: "text-white hover:text-yellow-400", children: "Religious Event" }),
        /* @__PURE__ */ jsx(Link, { to: "/", className: "text-white hover:text-yellow-400", children: "Sponsors For Event" }),
        /* @__PURE__ */ jsx(Link, { to: "/", className: "text-white hover:text-yellow-400", children: "Wall of Love" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "hidden lg:flex gap-x-4", children: [
        /* @__PURE__ */ jsx("button", { onClick: () => setIsRegistrationOpen(true), className: "px-4 py-2 bg-yellow-400 text-black rounded-lg hover:bg-blue-800 hover:text-white", children: "List Your Event" }),
        /* @__PURE__ */ jsx("button", { onClick: () => setIsRegistrationOpen(true), className: "px-4 py-2 bg-yellow-400 text-black rounded-lg hover:bg-blue-800 hover:text-white", children: "Find Your Event" })
      ] }),
      /* @__PURE__ */ jsx("button", { className: "lg:hidden", onClick: () => setMobileMenuOpen(true), children: /* @__PURE__ */ jsx(Bars3Icon, { className: "h-8 w-8 text-black" }) })
    ] }),
    /* @__PURE__ */ jsx(Dialog, { open: mobileMenuOpen, onClose: () => setMobileMenuOpen(false), className: "lg:hidden", children: /* @__PURE__ */ jsxs("div", { className: "fixed inset-y-0 right-0 w-64 bg-blue-600 shadow-xl p-4 flex flex-col z-50", children: [
      /* @__PURE__ */ jsx("button", { onClick: () => setMobileMenuOpen(false), className: "self-end mb-4", children: /* @__PURE__ */ jsx(XMarkIcon, { className: "h-8 w-8 text-black" }) }),
      /* @__PURE__ */ jsxs("nav", { className: "flex flex-col space-y-4", children: [
        /* @__PURE__ */ jsx(Link, { to: "/", className: "text-white hover:text-yellow-400", children: "Home" }),
        /* @__PURE__ */ jsx(Link, { to: "/", className: "text-white hover:text-yellow-400", children: "Religious Event" }),
        /* @__PURE__ */ jsx(Link, { to: "/", className: "text-white hover:text-yellow-400", children: "Sponsors For Event" }),
        /* @__PURE__ */ jsx(Link, { to: "/", className: "text-white hover:text-yellow-400", children: "Wall of Love" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-auto flex flex-col gap-2", children: [
        /* @__PURE__ */ jsx("button", { onClick: () => setIsRegistrationOpen(true), className: "px-4 py-2 bg-yellow-400 text-black rounded-lg hover:bg-blue-800 hover:text-white", children: "List Your Event" }),
        /* @__PURE__ */ jsx("button", { onClick: () => setIsRegistrationOpen(true), className: "px-4 py-2 bg-yellow-400 text-black rounded-lg hover:bg-blue-800 hover:text-white", children: "Find Your Event" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(Dialog, { open: isRegistrationOpen, onClose: () => setIsRegistrationOpen(false), className: "fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50", children: /* @__PURE__ */ jsxs("div", { className: "bg-white p-6 rounded-lg shadow-lg w-96", children: [
      /* @__PURE__ */ jsx("button", { onClick: () => setIsRegistrationOpen(false), className: "absolute top-2 right-2", children: /* @__PURE__ */ jsx(XMarkIcon, { className: "h-6 w-6 text-black" }) }),
      /* @__PURE__ */ jsx(AuthPage, {})
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
function EventCategories() {
  return /* @__PURE__ */ jsxs("div", { className: "content-wrap space-y-12 py-16 px-6 bg-gray-50 text-center", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-4xl font-bold text-gray-800", children: "The simplest way to host all your events" }),
    /* @__PURE__ */ jsx("div", { className: "flex flex-wrap justify-center gap-8", children: [
      {
        title: "In-person events",
        desc: "Keep it all together at the venue",
        video: "/images/inperson-event.webm",
        link: ""
      },
      {
        title: "Virtual events",
        desc: "Go beyond webinars and workshops",
        video: "/images/virtual-event.webm",
        link: ""
      },
      {
        title: "Hybrid events",
        desc: "Merge the physical with the virtual",
        video: "/images/hybrid-event.webm",
        link: ""
      }
    ].map((event, index) => /* @__PURE__ */ jsxs(
      "div",
      {
        className: "relative bg-white shadow-md rounded-lg p-6 w-full md:w-1/3 transition-transform hover:scale-105",
        children: [
          /* @__PURE__ */ jsx("div", { className: "relative overflow-hidden rounded-md", children: /* @__PURE__ */ jsxs(
            "video",
            {
              className: "w-full rounded-md",
              playsInline: true,
              muted: true,
              loop: true,
              autoPlay: true,
              children: [
                /* @__PURE__ */ jsx("source", { src: event.video, type: "video/webm" }),
                "Your browser does not support the video tag."
              ]
            }
          ) }),
          /* @__PURE__ */ jsx("h3", { className: "text-2xl font-semibold mt-4", children: event.title }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-600 mt-2", children: event.desc }),
          /* @__PURE__ */ jsx(
            "a",
            {
              href: event.link,
              className: "inline-block mt-4 px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700",
              children: "Explore More"
            }
          )
        ]
      },
      index
    )) }),
    /* @__PURE__ */ jsx("div", { className: "constellation-slit mt-12", children: /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "Featured in the Constellation ShortList™ for Event Marketing & Management Software (2020 - 2024)" }) })
  ] });
}
function EventTicketing() {
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center justify-between bg-white text-black py-12 px-6 lg:px-20", children: [
    /* @__PURE__ */ jsxs("div", { className: "max-w-lg", children: [
      /* @__PURE__ */ jsx("span", { className: "text-black font-semibold uppercase tracking-wide", children: "Turn a Profit" }),
      /* @__PURE__ */ jsxs("h2", { className: "text-3xl font-bold mt-2 flex items-center", children: [
        "0% commission event ticketing",
        /* @__PURE__ */ jsx("i", { className: "ml-2 text-black", children: "🎟️" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mt-4 text-black", children: "Our ticketing platform supports a wide range of payment options and 10+ payment gateways, so you can sell tickets exactly the way you want. Plus, you’ll never be penalized for your success—there are no commissions, and payouts happen instantly." }),
      /* @__PURE__ */ jsxs("div", { className: "mt-4 text-gray-400", children: [
        /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "REPLACES:" }),
        " ",
        /* @__PURE__ */ jsx("span", { className: "relative text-black", children: /* @__PURE__ */ jsx("span", { className: "strike-red", children: "Event ticketing platforms" }) })
      ] }),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "",
          className: "inline-block mt-6 px-6 py-3 text-lg font-semibold bg-yellow-500 text-black rounded-lg hover:bg-yellow-600 transition",
          children: "Explore Our Ticketing Platform"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex space-x-4 mt-8 lg:mt-0", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          src: "images/ticketing-1.png",
          alt: "Event management software with event ticketing solution",
          className: "w-40 h-auto lg:w-56 rounded-lg shadow-lg"
        }
      ),
      /* @__PURE__ */ jsx(
        "img",
        {
          src: "images/ticketing-2.png",
          alt: "Payment",
          className: "w-48 h-auto lg:w-72 rounded-lg shadow-lg"
        }
      )
    ] })
  ] });
}
const stats = [
  { id: 1, name: "Transactions every 24 hours", value: 44e6 },
  { id: 2, name: "Assets under holding", value: 119e9 },
  { id: 3, name: "New users annually", value: 46e3 }
];
function Stats() {
  return /* @__PURE__ */ jsx("div", { className: "bg-blue-500 py-24 sm:py-32", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl px-6 lg:px-8", children: /* @__PURE__ */ jsx("dl", { className: "grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3", children: stats.map((stat) => /* @__PURE__ */ jsxs("div", { className: "mx-auto flex max-w-xs flex-col gap-y-4", children: [
    /* @__PURE__ */ jsx("dt", { className: "text-base/7 text-white", children: stat.name }),
    /* @__PURE__ */ jsx("dd", { className: "order-first text-3xl font-semibold tracking-tight text-yellow-400 sm:text-5xl", children: /* @__PURE__ */ jsx(AnimatedNumber, { targetValue: stat.value }) })
  ] }, stat.id)) }) }) });
}
const AnimatedNumber = ({ targetValue }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        const increment = Math.ceil(targetValue / 100);
        return prev + increment >= targetValue ? targetValue : prev + increment;
      });
    }, 200);
    return () => clearInterval(interval);
  }, [targetValue]);
  return /* @__PURE__ */ jsx(motion.span, { animate: { opacity: [0, 1] }, children: count.toLocaleString() });
};
const people = [
  {
    name: "Leslie Alexander",
    role: "Co-Founder / CEO",
    imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    name: "Sanskar Kesrwani",
    role: "Co-Founder / CTO",
    imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    name: "Random",
    role: "Co-Founder / CMO",
    imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    name: "Unknown",
    role: "Co-Founder / HR",
    imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  }
  // More people...
];
function Team() {
  return /* @__PURE__ */ jsx("div", { className: "bg-white py-24 sm:py-32", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3", children: [
    /* @__PURE__ */ jsxs("div", { className: "max-w-xl", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl", children: "Meet our leadership" }),
      /* @__PURE__ */ jsx("p", { className: "mt-6 text-lg/8 text-gray-600", children: "We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the best results for our clients." })
    ] }),
    /* @__PURE__ */ jsx("ul", { role: "list", className: "grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2", children: people.map((person) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-x-6", children: [
      /* @__PURE__ */ jsx("img", { alt: "", src: person.imageUrl, className: "size-16 rounded-full" }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h3", { className: "text-base/7 font-semibold tracking-tight text-gray-900", children: person.name }),
        /* @__PURE__ */ jsx("p", { className: "text-sm/6 font-semibold text-indigo-600", children: person.role })
      ] })
    ] }) }, person.name)) })
  ] }) });
}
function TrustedBrands() {
  const brands = [
    {
      src: "//www.zohowebstatic.com/sites/zweb/images/otherbrandlogos/amazon-white.png",
      width: 145,
      height: 44,
      alt: "Amazon"
    },
    {
      src: "//www.zohowebstatic.com/sites/zweb/images/otherbrandlogos/levis-white.svg",
      width: 107,
      height: 44,
      alt: "Levi's"
    },
    {
      src: "//www.zohowebstatic.com/sites/zweb/images/otherbrandlogos/razorpay-white.svg",
      width: 208,
      height: 44,
      alt: "Razorpay"
    },
    {
      src: "//www.zohowebstatic.com/sites/zweb/images/otherbrandlogos/the-hindu-white.png",
      width: 357,
      height: 34,
      alt: "The Hindu"
    },
    {
      src: "//www.zohowebstatic.com/sites/zweb/images/otherbrandlogos/hindustan-times-white.png",
      width: 267,
      height: 34,
      alt: "Hindustan Times"
    },
    {
      src: "//www.zohowebstatic.com/sites/zweb/images/otherbrandlogos/thenudge-institute-white.png",
      width: 224,
      height: 44,
      alt: "The Nudge Institute"
    },
    {
      src: "//www.zohowebstatic.com/sites/zweb/images/otherbrandlogos/startup-tn-white.png",
      width: 200,
      height: 44,
      alt: "Startup TN"
    },
    {
      src: "//www.zohowebstatic.com/sites/zweb/images/otherbrandlogos/tie-global-white.png",
      width: 124,
      height: 44,
      alt: "TIE Global"
    },
    {
      src: "//www.zohowebstatic.com/sites/zweb/images/otherbrandlogos/psai.png",
      width: 141,
      height: 44,
      alt: "PSAI"
    },
    {
      src: "//www.zohowebstatic.com/sites/zweb/images/otherbrandlogos/india-space-congress.png",
      width: 104,
      height: 64,
      alt: "India Space Congress"
    },
    {
      src: "//www.zohowebstatic.com/sites/zweb/images/otherbrandlogos/sri-ramachandra-white.png",
      width: 298,
      height: 44,
      alt: "Sri Ramachandra"
    }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "bg-blue-500 py-10 px-4 text-center", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-white text-2xl font-bold mb-6", children: "Trusted by Leading Brands" }),
    /* @__PURE__ */ jsx("div", { className: "flex flex-wrap justify-center items-center gap-6", children: brands.map((brand, index) => /* @__PURE__ */ jsx(
      "img",
      {
        src: brand.src,
        width: brand.width,
        height: brand.height,
        alt: brand.alt,
        className: "max-h-16 object-contain opacity-80 hover:opacity-100 transition duration-300"
      },
      index
    )) })
  ] });
}
function EventUpload() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: 0,
    startDate: "",
    endDate: "",
    city: "",
    state: "",
    interest: ""
  });
  const [imageBase64, setImageBase64] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "price" ? Number(value) : value
    }));
  };
  const handleFileChange = (e) => {
    var _a;
    const file = (_a = e.target.files) == null ? void 0 : _a[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result;
        setImageBase64(base64String);
      };
      reader.readAsDataURL(file);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const dataToSend = {
      ...formData,
      image: imageBase64
    };
    try {
      const res = await fetch("/api/uploadEvent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataToSend)
      });
      const result = await res.json();
      if (res.ok) {
        alert("✅ " + result.message);
      } else {
        alert("❌ Upload failed: " + result.error);
      }
    } catch (error) {
      console.error("Error uploading event:", error);
      alert("❌ Error uploading event.");
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "relative overflow-hidden w-full h-screen flex justify-center items-center", children: [
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
    /* @__PURE__ */ jsxs(
      "form",
      {
        onSubmit: handleSubmit,
        className: "bg-blue-400 p-6 shadow-lg rounded-lg w-full max-w-lg z-10 mt-2 mb-2",
        children: [
          /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-gray-800 mb-4 text-center", children: "Upload Your Event" }),
          /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
            /* @__PURE__ */ jsx("label", { className: "block text-black", children: "Event Name" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "text",
                name: "name",
                value: formData.name,
                onChange: handleChange,
                className: "w-full px-3 py-2 border rounded-lg focus:ring focus:ring-blue-300",
                placeholder: "Enter event name",
                required: true
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
            /* @__PURE__ */ jsx("label", { className: "block text-gray-700", children: "Event Description" }),
            /* @__PURE__ */ jsx(
              "textarea",
              {
                name: "description",
                value: formData.description,
                onChange: handleChange,
                className: "w-full px-3 py-2 border rounded-lg focus:ring focus:ring-blue-300",
                placeholder: "Enter event description",
                required: true
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
            /* @__PURE__ */ jsx("label", { className: "block text-gray-700", children: "Price (₹)" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "number",
                name: "price",
                value: formData.price,
                onChange: handleChange,
                className: "w-full px-3 py-2 border rounded-lg focus:ring focus:ring-blue-300",
                placeholder: "Enter event price",
                required: true
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mb-4 flex space-x-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "w-1/2", children: [
              /* @__PURE__ */ jsx("label", { className: "block text-gray-700", children: "Start Date" }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "date",
                  name: "startDate",
                  value: formData.startDate,
                  onChange: handleChange,
                  className: "w-full px-3 py-2 border rounded-lg focus:ring focus:ring-blue-300",
                  required: true
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "w-1/2", children: [
              /* @__PURE__ */ jsx("label", { className: "block text-gray-700", children: "End Date" }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "date",
                  name: "endDate",
                  value: formData.endDate,
                  onChange: handleChange,
                  className: "w-full px-3 py-2 border rounded-lg focus:ring focus:ring-blue-300",
                  required: true
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mb-4 flex space-x-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "w-1/2", children: [
              /* @__PURE__ */ jsx("label", { className: "block text-gray-700", children: "State" }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "text",
                  name: "state",
                  value: formData.state,
                  onChange: handleChange,
                  className: "w-full px-3 py-2 border rounded-lg focus:ring focus:ring-blue-300",
                  placeholder: "Enter state",
                  required: true
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "w-1/2", children: [
              /* @__PURE__ */ jsx("label", { className: "block text-gray-700", children: "City" }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "text",
                  name: "city",
                  value: formData.city,
                  onChange: handleChange,
                  className: "w-full px-3 py-2 border rounded-lg focus:ring focus:ring-blue-300",
                  placeholder: "Enter city",
                  required: true
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
            /* @__PURE__ */ jsx("label", { className: "block text-gray-700", children: "Interest/Category" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "text",
                name: "interest",
                value: formData.interest,
                onChange: handleChange,
                className: "w-full px-3 py-2 border rounded-lg focus:ring focus:ring-blue-300",
                placeholder: "E.g. Music, Tech, Sports",
                required: true
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
            /* @__PURE__ */ jsx("label", { className: "block text-gray-700", children: "Event Image" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "file",
                accept: "image/*",
                onChange: handleFileChange,
                className: "w-full px-3 py-2 border rounded-lg focus:ring focus:ring-blue-300",
                required: true
              }
            )
          ] }),
          /* @__PURE__ */ jsx(
            "button",
            {
              type: "submit",
              className: "w-full bg-yellow-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 transition",
              children: "Upload Event"
            }
          )
        ]
      }
    )
  ] });
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
    children: [/* @__PURE__ */ jsx(Navbar, {}), /* @__PURE__ */ jsx(HeroSection, {}), /* @__PURE__ */ jsx(EventCategories, {}), /* @__PURE__ */ jsx(TrustedBrands, {}), /* @__PURE__ */ jsx(EventTicketing, {}), /* @__PURE__ */ jsx(Stats, {}), /* @__PURE__ */ jsx(Team, {}), /* @__PURE__ */ jsx(EventUpload, {}), /* @__PURE__ */ jsx(Footer, {})]
  });
});
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: home,
  meta
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "./assets/entry.client-CGaoSQJ_.js", "imports": ["./assets/chunk-GNGMS2XR-0G9Tdv0P.js", "./assets/index-7e9fipYT.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": true, "module": "./assets/root-wogObhQ7.js", "imports": ["./assets/chunk-GNGMS2XR-0G9Tdv0P.js", "./assets/index-7e9fipYT.js", "./assets/with-props-D4Ihdlvy.js"], "css": ["./assets/root-Cu6DxnEB.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "hydrateFallbackModule": void 0 }, "routes/home": { "id": "routes/home", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "./assets/home-B-uhGmbG.js", "imports": ["./assets/with-props-D4Ihdlvy.js", "./assets/chunk-GNGMS2XR-0G9Tdv0P.js", "./assets/index-7e9fipYT.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "hydrateFallbackModule": void 0 } }, "url": "./assets/manifest-8925c6fd.js", "version": "8925c6fd" };
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
