import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import ModalComponent from "../../../shared/ModalComponent";
import styles from "./style.module.css";
const ProjectItem = (props) => {
  return (
    <ModalComponent {...props}>
      <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 not-prose relative">
        <div class="ribbon">
          <span>{props.item.ribbon}</span>
        </div>
        <img class="rounded-t-lg" src={props.item.image} alt="" />
        <div class="p-5">
          <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            {props.item.name}
          </h5>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 text-[14px]">
            {props.item.description}
          </p>
          <buttton class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-red-800 rounded-lg hover:bg-red-900 focus:ring-4 focus:outline-none focus:ring-red-600 dark:bg-red-800 dark:hover:bg-red-900 dark:focus:ring-red-900">
            Know more
            <svg
              aria-hidden="true"
              class="ml-2 -mr-1 w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </buttton>
        </div>
        {props.item.highlight && (
          <div class="ribbon3">
            <div class="content Center">
              <div className="pb-2">
                <AiOutlineStar />
              </div>
            </div>
          </div>
        )}
      </div>
    </ModalComponent>
  );
};

export default ProjectItem;
