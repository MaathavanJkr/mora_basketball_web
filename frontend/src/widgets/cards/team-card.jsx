import PropTypes from "prop-types";
import { Card, Avatar, Typography } from "@material-tailwind/react";

export function TeamCard({ img, name, position, intro, fb, insta }) {
  return (
    <div
      role="listitem"
      className="relative mb-32 mt-16 sm:mb-24 sm:w-3/4 md:w-2/5 lg:w-2/5 xl:w-1/3 xl:max-w-sm"
    >
      <div className="overflow-hidden rounded bg-white shadow-md">
        <div className="absolute -mt-20 flex w-full justify-center">
          <div className="h-32 w-32">
            <img
              src={img}
              alt="Display Picture of Andres Berlin"
              role="img"
              className="h-full w-full rounded-full object-cover shadow-md"
            />
          </div>
        </div>
        <div className="mt-16 px-6">
          <h1 className="mb-1 text-center text-3xl font-bold">{name}</h1>
          <p className="text-center text-sm text-gray-800">{position}</p>
          <p className="pt-3 text-center text-base font-normal text-gray-600">
            {intro}
          </p>
          <div className="flex w-full justify-center pb-5 pt-5">
            <a href={fb} className="mx-5">
              <div aria-label="Facebook" role="img">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#718096"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-facebook"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </div>
            </a>
            <a href={insta} className="mx-5">
              <div aria-label="Instagram" role="img">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#718096"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-instagram"
                >
                  <rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

TeamCard.defaultProps = {
  position: "",
  socials: null,
};

TeamCard.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.string,
  socials: PropTypes.node,
};

TeamCard.displayName = "/src/widgets/layout/team-card.jsx";

export default TeamCard;
