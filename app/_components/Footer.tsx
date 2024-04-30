import FacebookIcon from "../_assets/FacebookIcon";
import InstagramIcon from "../_assets/InstagramIcon";
import LinkedInIcon from "../_assets/LinkedInIcon";
import TwitterIcon from "../_assets/TwitterIcon";



export default function Footer(){
  return (
    <footer className="flex flex-col flex-block-5 mt-[80px]">
      <div className="flex gap-3">
        <a target="_blank" href="https://facebook.com/61558566416460">
          <FacebookIcon />
        </a>
        <a target="_blank" href="https://twitter.com/roomeyfinder">
          <TwitterIcon />
        </a>
        <a target="_blank" href="https://www.linkedin.com/company/roomeyfinder">
          <LinkedInIcon />
        </a>
        <a target="_blank" href="https://www.instagram.com/roomeyfinder">
          <InstagramIcon />
        </a>
      </div>
      <div className="flex gap-[1ch]">
        <svg
          className="ikonik-hbf18j"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 1024 1024"
        >
          <path
            className="path-b3onr"
            fill="currentColor"
            d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372zm5.6-532.7c53 0 89 33.8 93 83.4.3 4.2 3.8 7.4 8 7.4h56.7c2.6 0 4.7-2.1 4.7-4.7 0-86.7-68.4-147.4-162.7-147.4C407.4 290 344 364.2 344 486.8v52.3C344 660.8 407.4 734 517.3 734c94 0 162.7-58.8 162.7-141.4 0-2.6-2.1-4.7-4.7-4.7h-56.8c-4.2 0-7.6 3.2-8 7.3-4.2 46.1-40.1 77.8-93 77.8-65.3 0-102.1-47.9-102.1-133.6v-52.6c.1-87 37-135.5 102.2-135.5z"
          ></path>
        </svg>
        <div className="text-block-4">
          Copyright RoomeyFinder 2024 &nbsp;&nbsp;| &nbsp;&nbsp;All rights
          reserved
        </div>
      </div>
    </footer>
  )
}