
// Click to another page

document.getElementById('another-page').addEventListener('click', function () {
  window.location.href = 'another-page.html';
})

// show all category

const allCategory = async () => {
  const response = await fetch('https://openapi.programming-hero.com/api/videos/categories');
  const categoryData = await response.json();

  const tabContainer = document.getElementById('tabs-container')

  categoryData.data.forEach((category) => {
    const div = document.createElement('div');
    div.innerHTML = `<a onclick="loadVideo('${category.category_id}')"  class="tab tab-active hover:bg-orange-500 text-xl">${category?.category}</a> `;
    tabContainer.appendChild(div)
  });

  // console.log(categoryData.data);

}

//  show all video

const loadVideo = async (categoryId) => {
  const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${categoryId}`);
  const data = await res.json();
  const cardConainer = document.getElementById('card-container');


  data.data.forEach((videos) => {
    const div = document.createElement('div');
    div.innerHTML = ` <div class="card card-compact  bg-base-100 shadow-xl">
    <figure><img src="${videos.thumbnail}"/></figure>
    <div class="card-body">

    <div class="flex gap-3">

    <img class="h-3/6 w-1/6 rounded-full" src="${videos.authors[0].profile_picture}" alt="">
    <h2 class="card-title text-2xl font-bold">${videos?.title
      }</h2>
    </div>
      <h3 class="text-lg ml-16">${videos?.authors[0]?.profile_name}</h3>
      <p class="text-lg ml-16">${videos?.authors[0]?.verified}</p>
       <p class="text-lg ml-16">${videos.others.views}</p>
    </div>
  </div> `;
    cardConainer.appendChild(div);
  })


}

allCategory()




// loadVideo()

