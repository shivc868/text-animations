import Link from 'next/link'

const socialLinks = [
  {href: 'https://instagram.com', label: 'Instagram'},
  {href: 'https://twitter.com', label: 'Twitter'},
  {href: 'mailto:hello@blackspotlight.com', label: 'Email'},
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="">
      <h3>Footer Content</h3>
    </footer>
  )
}
