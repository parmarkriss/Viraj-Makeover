document.addEventListener("DOMContentLoaded", () => {
  const datablog = [
    {
      image: "./images/Rectangle 10.png",
      imagedate: "./images/Group 1000004471.png",
      title: "AMAZING MICRO BLADING IN <br/> VESU",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using.",
      link: "blogdetails.html",
      date: "23 August",
    },
    {
      image: "./images/Rectangle 10 (1).png",
      imagedate: "./images/Group 1000004474.png",
      title: "SEMI PERMANENT LIPS MAKEUP IN <br/> VESU.",
      description: "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using.",
      link: "blogdetails.html",
      date: "25 August",
    },
    {
      image: "./images/Rectangle 10 (2).png",
      imagedate: "./images/Group 1000004475.png",
      title: "LATEST MICRO BLADIND OFFER <br/> AVAILABLE IN VESU SURAT",
      description: "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using.",
      link: "blogdetails.html",
      date: "27 August",
    },

    {
      image: "./images/Rectangle 10 (3).png",
      imagedate: "./images/Group 1000004471.png",
      title: "AMAZING MICRO BLADING IN <br/> VESU",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using.",
      link: "blogdetails.html",
      date: "23 August",
    },
    {
      image: "./images/Rectangle 10 (4).png",
      imagedate: "./images/Group 1000004474.png",
      title: "SEMI PERMANENT LIPS MAKEUP IN <br/> VESU.",
      description: "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using.",
      link: "blogdetails.html",
      date: "25 August",
    },
    {
      image: "./images/Rectangle 10 (5).png",
      imagedate: "./images/Group 1000004475.png",
      title: "LATEST MICRO BLADIND OFFER <br/> AVAILABLE IN VESU SURAT",
      description: "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using.",
      link: "blogdetails.html",
      date: "27 August",
    },

    {
      image: "./images/Rectangle 10 (6).png",
      imagedate: "./images/Group 1000004471.png",
      title: "AMAZING MICRO BLADING IN <br/> VESU",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using.",
      link: "blogdetails.html",
      date: "23 August",
    },
    {
      image: "./images/Rectangle 10 (7).png",
      imagedate: "./images/Group 1000004474.png",
      title: "SEMI PERMANENT LIPS MAKEUP IN <br/> VESU.",
      description: "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using.",
      link: "blogdetails.html",
      date: "25 August",
    },
    {
      image: "./images/Rectangle 10 (8).png",
      imagedate: "./images/Group 1000004475.png",
      title: "LATEST MICRO BLADIND OFFER <br/> AVAILABLE IN VESU SURAT",
      description: "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using.",
      link: "blogdetails.html",
      date: "27 August",
    },

    {
      image: "./images/Rectangle 10 (9).png",
      imagedate: "./images/Group 1000004471.png",
      title: "AMAZING MICRO BLADING IN <br/> VESU",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using.",
      link: "blogdetails.html",
      date: "23 August",
    },
    {
      image: "./images/Rectangle 10 (10).png",
      imagedate: "./images/Group 1000004474.png",
      title: "SEMI PERMANENT LIPS MAKEUP IN <br/> VESU.",
      description: "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using.",
      link: "blogdetails.html",
      date: "25 August",
    },
    {
      image: "./images/Rectangle 10 (11).png",
      imagedate: "./images/Group 1000004475.png",
      title: "LATEST MICRO BLADIND OFFER <br/> AVAILABLE IN VESU SURAT",
      description: "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using.",
      link: "blogdetails.html",
      date: "27 August",
    },

  ];

  const cardContainerblog = document.getElementById("card-container-blog");

  if (!cardContainerblog) {
    console.error("Element with ID 'card-container-blog' not found.");
    return;
  }

  datablog.forEach((item, index) => {
    const card = document.createElement("div");
    card.className = "shadow-md rounded-lg overflow-hidden";

    const isGreen = index === 0;

    card.innerHTML = `
<div class="max-w-md bg-[#242424] border border-gray-200 rounded-lg shadow-md overflow-hidden mx-3 xl:mx-0">
<div class="relative">
  <img 
    class="w-full h-56 object-cover" 
    src="${item.image}" 
    alt="${item.title}">
  ${item.imagedate
        ? `<img 
          class="absolute top-0 right-5"
          src="${item.imagedate}" 
          alt="${item.title}">`
        : ""
      }
</div>
<div class="p-5">
  <h2 class="text-md font ${isGreen ? "text-green-500" : "text-white"
      } mb-2 tracking-wider">
    ${item.title}
  </h2>
  <p class="text-white mb-4 ${isGreen ? "text-white" : "text-[#B8B8B8]"
      }">
    ${item.description}
  </p>
  <div class="flex justify-between items-center">
    <a 
      href="${item.link}" 
      class="inline-block text-sm font font-medium ${isGreen ? "text-[#009746]" : "text-white"
      } rounded-lg transition hover:text-[#009746]">
      Read More <i class="fa-solid fa-arrow-right ps-1"></i>
    </a>
    <span class="text-white">
      <i class="fa-solid fa-calendar-days pe-1"></i> ${item.date}
    </span>
  </div>
</div>
</div>
`;
    cardContainerblog.appendChild(card);
  });
});
