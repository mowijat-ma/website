import { useTranslations } from "next-intl"

export const navigationLinksWithIntl = (t: any)=>{
    const links = [
    {
      id: 1,
      title: t("home"),
      href: "/"
    },
    {
      id: 2,
      title: t("news"),
      href: "/news"
    },
    {
      id: 3,
      title: t("cinema_world"),
      href: "/cinema/world"
    },
    {
      id: 4,
      title: t("cinema_arabe"),
      href: "/cinema/arabe"
    },
    {
      id: 5,
      title: t("cinema_morrocan"),
      href: "/cinema/morrocan"
    },
    {
      id: 6,
      title: t("interviews"),
      href: "/interviews"
    },
    {
      id: 7,
      title: t("critic"),
      href: "/critic"
    },
    {
      id: 7,
      title: t("calendar"),
      href: "/calendar"
    },
  ]
  const menu = [
    {
      title: t("home"),
      href: "/"
    },
    {
      title: t("news"),
      href: "/news"
    },
    {
      title: t("cinema_morrocan"),
      href: "/cinema/morrocan"
    },
    {
      title: t("cinema_arabe"),
      href: "/cinema/arabe"
    },
    {
      title: t("cinema_world"),
      href: "/cinema/world"
    },
    {
      title: t("events"),
      href: "/events",
    },
    {
      title: t("interviews"),
      href: "/interviews",

    },
    {
      title: t("critic"),
      href: "/critic"
    },
    {
      title: t("calendar"),
      href: "/calendar"
    },
    {
      title: t("other"),
      // href: "/others"
      items: [
        {
          title: t("theater"),
          href: "/theater"
        },
        {
          title: t("paint"),
          href: "/paint"
        },
        {
          title: t("music"),
          href: "/music"
        },
      ]
    },

  ]
    return links

}