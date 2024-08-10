import React from 'react';
import Email from "../../public/Images/emails.avif";
import Self from "../../public/Images/bookself.avif";
import Flights from "../../public/Images/flights.avif";
import Menu from "../../public/Images/menu.avif";
import Music from "../../public/Images/music.avif";
import Seo from "../../public/Images/seo.avif";
import Ranking from "../../public/Images/Ranking.avif";
import Cart from "../../public/Images/onlinecart.avif";
import '../../public/Style/Application.css'; // Import the CSS file for styling

const applicationsData = [
  {
    title: 'Library Book Organization',
    description: `In a library, books are typically sorted alphabetically by the author's last name or by genre. This systematic arrangement allows visitors to find books quickly and easily. Sorting by genre helps readers locate books that match their interests, while sorting by author ensures that all works by a particular writer are grouped together. Libraries might also sort books by publication date or popularity to highlight new arrivals or frequently borrowed titles.`,
    image: Self,
    layout: 'image-left', // Change to 'image-right' for different layout
  },
  {
    title: 'Shopping Cart Checkout',
    description: `When shopping online, items in your cart can be sorted by various criteria, such as category, price, or popularity. Sorting by category helps organize products into groups like electronics, clothing, or groceries, making it easier to review your selections. Sorting by price allows you to compare costs, ensuring you stay within your budget. Some platforms even allow sorting by discounts, helping shoppers take advantage of special offers and deals before completing their purchase.`,
    image: Cart,
    layout: 'image-right', // Change to 'image-left' for different layout
  },
  {
    title: 'Sorting Emails',
    description: `Email applications often provide options to sort messages by date, sender, subject, or importance. Sorting by date helps users stay on top of their latest communications, ensuring no important message is missed. Sorting by sender allows users to quickly find emails from specific contacts, while sorting by subject can help group related emails together. Advanced sorting features, such as filtering by unread status or flagging important messages, further enhance email management, making it easier to prioritize and respond to key communications.`,
    image: Email,
    layout: 'image-left', // Change to 'image-right' for different layout
  },
  {
    title: 'Flight Schedules',
    description: `Airlines and travel websites sort flight schedules by departure and arrival times, destinations, and airlines. Travelers can filter and sort these flights based on their preferences, such as shortest travel time, lowest price, or preferred airline. Sorting by departure time helps travelers find flights that fit their schedule, while sorting by price helps them stay within their budget. Additionally, sorting by duration can help find the quickest route, which is especially important for long-haul flights where minimizing travel time is a priority.`,
    image: Flights,
    layout: 'image-right', // Change to 'image-left' for different layout
  },
  {
    title: 'Restaurant Menus',
    description: `Restaurants organize their menus by categories such as appetizers, main courses, desserts, and beverages. This sorting makes it easier for diners to navigate the menu and find exactly what they're looking for. Within each category, items might be further sorted by popularity, chef’s recommendations, or price. This helps diners make decisions based on their taste preferences and budget. For instance, sorting appetizers by popularity might highlight the restaurant’s signature dishes, while sorting by price allows customers to choose items within their spending limit.`,
    image: Menu,
    layout: 'image-left', // Change to 'image-right' for different layout
  },
  {
    title: 'Music Playlist',
    description: `Music streaming services allow users to sort their playlists by song title, artist, album, or release date. Sorting by artist or album helps users find specific tracks quickly, while sorting by release date allows them to listen to the latest songs. Some platforms also offer sorting options based on genre or mood, helping users create playlists that match their preferences and activities. For example, a workout playlist might be sorted by tempo to include high-energy tracks at the top, while a relaxation playlist might feature calming songs prominently.`,
    image: Music,
    layout: 'image-right', // Change to 'image-left' for different layout
  },
  {
    title: 'SEO Keyword Management',
    description: `In search engine optimization (SEO), keywords are often sorted by metrics like search volume, competition, and relevance. Sorting by search volume helps identify high-traffic keywords that can drive more visitors to a website, while sorting by competition helps choose keywords that are easier to rank for. Relevance sorting ensures that the selected keywords align with the website’s content and target audience. This strategic approach to sorting keywords helps optimize content effectively and improves search engine rankings.`,
    image: Seo,
    layout: 'image-left', // Change to 'image-right' for different layout
  },
  {
    title: 'Ranking Algorithms',
    description: `Ranking algorithms are used to order search results, social media posts, or product recommendations based on relevance and user preferences. For example, search engines use ranking algorithms to sort search results by relevance to the query, ensuring users find the most pertinent information. Similarly, social media platforms rank posts based on engagement metrics, showing users content that is most likely to be of interest. Ranking algorithms play a crucial role in personalizing user experiences and delivering content that matches individual preferences.`,
    image: Ranking,
    layout: 'image-right', // Change to 'image-left' for different layout
  }
];

const Application = () => {
  return (
    <>
      <section className="intro" >
        <h3>Applications of Sorting Algorithms</h3>
        <div className="interactive-line"></div>
        <p>Sorting algorithms play a critical role in various real-world applications. Below are some examples of how sorting is used in everyday technology and processes:</p>
      </section>
      <section className="applications">
        <ul>
          {applicationsData.map((app, index) => (
            <li key={index} className={`application-item ${app.layout}`}>
              <div className="application-card">
                <div className="application-content">
                  <h1>{app.title}</h1>
                  <p>{app.description}</p>
                </div>
                <div className="application-image">
                  <img src={app.image} alt={app.title} />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Application;
