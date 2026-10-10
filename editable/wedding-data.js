/**
 * wedding-data.js — Customer-facing editable data layer for ghibli-portrait
 * Edit this file to update couple names, wedding date, story chapters, venue, family, and images.
 */

window.WEDDING_DATA = {
  couple: {
    groom: "Raji Reddy",
    bride: "Pravallika",
    groomShort: "Raji Reddy",
    brideShort: "Pravallika",
    hashtag: "#prara",
  },

  hashtag: "#prara",

  // Drives countdown timer, calendar export, and date displays
  weddingDate: "2026-11-15T10:00:00+05:30",
  displayDate: "November 15th, 2026",
  tagline: `Two strangers brought together · Forever begins now.\n#prara`,

  hero: {
    childhoodGroom: "./editable/assets/childhood-groom.png",
    childhoodBride: "./editable/assets/childhood-bride.png",
    portraitGroom: "./editable/assets/portrait-groom.png",
    portraitBride: "./editable/assets/portrait-bride.png",
    bodyGroom: "./editable/assets/body-groom.png",
    bodyBride: "./editable/assets/body-bride.png",
  },

  story: [
    {
      title: "The First Meeting",
      date: "April 25th, 2026",
      text: "April 25th 2026, we just know God looked down at us, smiled and said: \"they finally met\". A meeting brought two strangers together..little did we know, it was the beginning of something beautiful. Two families,two hearts and one first meeting became our favourite forever",
    },
    {
      title: "Friendship or Bond That Grew",
      date: "The Journey",
      text: "With every meeting, the conversation grew deeper, the smiles came easier, we discovered little more about each other and a bond that felt more special with every moment.Somewhere along the way, we knew we had found our forever",
    },
    {
      title: "The Proposal (The sweetest YES)",
      date: "The Sweetest YES",
      text: "On a birdthday filled with love and surrounded by our dear ones became even more special as it turned into a suprise proposal that we would cherish forever. With one precious 'YES' witnessed a beautiful day into unforgettable memory",
    },
    {
      title: "The Wedding",
      date: "November 15th, 2026",
      text: "Our favourite chapter begins!! From a first meeting to a beautiful bond and from a cherished 'YES' to a lifetime together.. With hearts full of love and happiness, we invite you to our wedding.Come celebrate our happily ever after with us",
    },
  ],

  details: {
    ceremony: {
      title: "The Wedding Ceremony",
      venue: "Eco Villagio",
      time: "10:00 AM",
      date: "Sunday, November 15th, 2026",
      note: "Traditional Telugu wedding rituals & celebrations",
      dressCode: "Traditional outfits",
      image: "./editable/assets/event-wedding.png",
    },
    events: [
      {
        title: "Sangeeth",
        date: "Friday, November 13th, 2026",
        time: "From 7:00 PM Onwards",
        venue: "Eco Villagio",
        note: "Friends and family dancing together on the floor at a lively Sangeeth celebration",
        dressCode: "Festive Indo-Western / Traditional",
        image: "./editable/assets/event-sangeeth.png",
      },
      {
        title: "Haldi",
        date: "Saturday, November 14th, 2026",
        time: "9:00 AM",
        venue: "Eco Villagio",
        note: "A vibrant Haldi ceremony in a beautiful lavender-themed setting",
        dressCode: "Lavender-coloured traditional outfits for guests",
        image: "./editable/assets/event-haldi.png",
      },
      {
        title: "Carnival cum Mehendi",
        date: "Saturday, November 14th, 2026",
        time: "7:00 PM Onwards",
        venue: "Eco Villagio",
        note: "Colourful carnival and Mehendi celebration filled with rainbow colours, music, fun, and festivities",
        dressCode: "Rainbow & Bright festive colours",
        image: "./editable/assets/event-carnival.png",
      },
      {
        title: "The Wedding Ceremony",
        date: "Sunday, November 15th, 2026",
        time: "10:00 AM",
        venue: "Eco Villagio",
        note: "Traditional Telugu wedding showcasing sacred rituals, traditional décor, and the joy of family and friends coming together",
        dressCode: "Traditional outfits",
        image: "./editable/assets/event-wedding.png",
      },
    ],
    dressCode: "Traditional & Festive Outfits",
  },

  venue: {
    name: "Eco Villagio",
    address: "Eco Villagio",
    mapQuery: "Eco Villagio",
    mapUrl: "https://share.google/dDJiVc29ke0i9r6KB",
  },

  galleryTitle: "Moments together",
  gallery: [
    {
      src: "./editable/assets/moment-1.jpg",
      alt: "Raji Reddy & Pravallika — Embracing with love",
    },
    {
      src: "./editable/assets/moment-2.jpg",
      alt: "Raji Reddy & Pravallika — Moments together",
    },
    {
      src: "./editable/assets/moment-3.jpg",
      alt: "Raji Reddy & Pravallika — Full length portrait",
    },
    {
      src: "./editable/assets/moment-4.jpg",
      alt: "Raji Reddy & Pravallika — Deep in love",
    },
    {
      src: "./editable/assets/solo-groom.jpg",
      alt: "Raji Reddy — The Groom",
    },
    {
      src: "./editable/assets/solo-bride.jpg",
      alt: "Pravallika — The Bride",
    },
  ],

  families: {
    groom: {
      label: "The Groom's Family",
      title: "Raji Reddy's Family",
      photo: "./editable/assets/portrait-groom.png",
      members: [
        { name: "Family of the Groom", relation: "With love & blessings" },
      ],
    },
    bride: {
      label: "The Bride's Family",
      title: "Pravallika's Family",
      photo: "./editable/assets/portrait-bride.png",
      members: [
        { name: "Family of the Bride", relation: "With love & blessings" },
      ],
    },
  },

  calendar: {
    title: "Raji Reddy & Pravallika (#prara) — Wedding Ceremony",
    description: "Wedding ceremony & celebrations at Eco Villagio #prara.",
    durationHours: 3,
  },

  footer: {
    thanks: "Thank you for celebrating with us · #prara",
    copyright: "© 2026 Raji Reddy & Pravallika · #prara · Handcrafted with love by InviteStory",
  },
};
