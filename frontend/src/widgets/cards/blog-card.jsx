import PropTypes from "prop-types";

export function BlogCard({ image, date, CardTitle, CardDescription, link }) {
  return (
    <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
      <img
        src={image}
        className="object-cover w-full h-64"
        alt=""
        loading="lazy"
      />
      <div className="px-5 border border-t-0">
        <p className="my-3 text-xs font-semibold tracking-wide uppercase">
          <span className="text-gray-600">{date}</span>
        </p>
        <a
          href={link}
          className="uppercase inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700 text-dark"
        >
          {CardTitle}
        </a>
        <p className="mb-2 text-gray-700">
          {CardDescription}
        </p>
        <a
          href={link}
          aria-label=""
          className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
        >
          Read more
        </a>
      </div>
    </div>

  );
}

export default BlogCard;
