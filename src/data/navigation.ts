import { useTranslations } from "next-intl"

export const NAVIGATION_LINKS  = [
    {
      id: 1,
      title: "home",
      href: "/"
    },
    {
      id: 2,
      title: "news",
      href: "/news"
    },
    {
      id: 3,
      title: "cinema_world",
      href: "/cinema/world"
    },
    {
      id: 4,
      title: "cinema_arabe",
      href: "/cinema/arabe"
    },
    {
      id: 5,
      title: "cinema_morrocan",
      href: "/cinema/morrocan"
    },
    {
      id: 6,
      title: "interviews",
      href: "/interviews"
    },
    {
      id: 7,
      title: "critic",
      href: "/critic"
    },
    {
      id: 7,
      title: "calendar",
      href: "/calendar"
    },
    {
      id: 8,
      title: "other",
      // href: "/calendar"
      items: [
        {
          title: "theater",
          href: "/theater"}
      ]
    },
    {
      id: 9,
      title: "portrait",
      href: "/portraits"
    },
  ]

export const FOOTER_LINKS = [
    {
      title: "footer.mowijat",
      links: [
        {
          title: "navigation.links.about_",
          href: "",
        },
        {
          title: "navigation.links.contact_us",
          href: "",
        },
        {
          title: "navigation.links.publish_in",
          href: "",
        },
        {
          title: "navigation.links.terms",
          href: "",
        },
        {
          title: "navigation.links.team",
          href: "",
        }
      ]
    },
    {
      title: "footer.quickLinks",
      links: [

        {
          id: 2,
          title: "navigation.links.news",
          href: "/news"
        },
        {
          id: 3,
          title: "navigation.links.cinema_world",
          href: "/cinema/world"
        },
        {
          id: 4,
          title: "navigation.links.cinema_arabe",
          href: "/cinema/arabe"
        },
        {
          id: 5,
          title: "navigation.links.cinema_morrocan",
          href: "/cinema/morrocan"
        },
        {
          id: 6,
          title: "navigation.links.interviews",
          href: "/interviews"
        },
        {
          id: 7,
          title: "navigation.links.critic",
          href: "/critic"
        },
        {
          id: 7,
          title: "navigation.links.calendar",
          href: "/calendar"
        },
      ]
    },
    

  ]

const menu = [
    {
      title: "home",
      href: "/"
    },
    {
      title: "news",
      href: "/news"
    },
    {
      title: "cinema_morrocan",
      href: "/cinema/morrocan"
    },
    {
      title: "cinema_arabe",
      href: "/cinema/arabe"
    },
    {
      title: "cinema_world",
      href: "/cinema/world"
    },
    {
      title: "events",
      href: "/events",
    },
    {
      title: "interviews",
      href: "/interviews",

    },
    {
      title: "critic",
      href: "/critic"
    },
    {
      title: "calendar",
      href: "/calendar"
    },
    {
      title: "other",
      // href: "/others"
      items: [
        {
          title: "theater",
          href: "/theater"
        },
        {
          title: "paint",
          href: "/paint"
        },
        {
          title: "music",
          href: "/music"
        },
      ]
    },

  ]