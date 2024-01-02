import { Metadata } from 'next';

export const dynamic = 'force-static'; // no necessary, just for demonstration
//This can be useful when you know the content won't change between builds, or when you want to optimize for performance and don't need data to be up-to-date for each request.

export const metadata: Metadata = {
  title: 'About Us',
  description: 'About NextSpace',
};

export default function Blog() {
  return (
    <div>
      <h1>About us</h1>
      <p>We are a social media company that wants to bring people together!</p>
    </div>
  );
}
