function getPageEmails() {
  const emails = document.body.innerText.match(
    /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/gim
  );

  return [...new Set(emails)];
}

// getPageEmails();

//links
// const links = [
//   ...new Set(
//     [...document.querySelectorAll("a")]
//       .filter((link) => link.innerText.toLowerCase().includes("contact"))
//       .map((e) => e.href)
//   ),
// ];

// [
//   ...new Set(
//     [...document.querySelectorAll("a")]
//       .filter(
//         (link) =>
//           link.innerText.toLocaleLowerCase().includes("contact") ||
//           link.innerText.toLowerCase().includes("about") ||
//           link.innerText.toLowerCase().includes("faq")
//       )
//       .map((e) => e.href)
//   ),
// ];

function getContactPages() {
  return [
    ...new Set(
      [...document.querySelectorAll("a")]
        .filter((link) =>
          ["contact", "about", "faq"].some((elem) =>
            link.innerText.toLowerCase().includes(elem)
          )
        )
        .map((e) => e.href)
    ),
  ];
}

// getContactPages();

module.exports = { getPageEmails, getContactPages };
