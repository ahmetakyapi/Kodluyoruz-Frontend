const foodMenu = [
    {
      id: 1,
      title: "Tteokbokki",
      category: "Korea",
      price: 10.99,
      img:
        "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
      desc: `Spicy rice cakes, serving with fish cake.`,
    },
    {
      id: 2,
      title: "Chicken Ramen",
      category: "Japan",
      price: 7.99,
      img:
        "https://www.kitchensanctuary.com/wp-content/uploads/2020/12/Quick-Chicken-Ramen-square-FS-22.jpg",
      desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
    },
    {
      id: 3,
      title: "Bibimbap",
      category: "Korea",
      price: 8.99,
      img:
        "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
      desc: `Boiling vegetables, serving with special hot sauce`,
    },
    {
      id: 4,
      title: "Dan Dan Mian",
      category: "China",
      price: 5.99,
      img:
        "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
      desc: `Dan dan noodle, serving with green onion `,
    },
    {
      id: 5,
      title: "Yangzhou Fried Rice",
      category: "China",
      price: 12.99,
      img:
        "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
      desc: `Yangzhou style fried rice, serving with bean and pickles `,
    },
    {
        id: 6,
        title: "Onigiri",
        category: "Japan",
        price: 9.99,
        img:
          "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
        desc: `Rice Sandwich, serving with soy sauce`,
    },
    {
      id: 7,
      title: "Jajangmyeon",
      category: "Korea",
      price: 15.99,
      img:
        "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
      desc: `Black bean sauce noodle, serving with green onion `,
    },
    {
      id: 8,
      title: "Ma Yi Shang Shu",
      category: "China",
      price: 12.99,
      img:"https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
      desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
    },
    {
      id: 9,
      title: "Doroyaki",
      category: "Japan",
      price: 3.99,
      img:"https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
      desc: `Red bean paste dessert, serving with honey.`,
    },
    {
        id: 10,
        title: "Lahmacun",
        category: "Turkey",
        price: 4.99,
        img:"https://cdn.yemek.com/mnresize/940/940/uploads/2020/04/lahmacun-yeni-one-cikan.jpg",
        desc: `Lahmacun is served with minced meat, parsley, onion, garlic and black pepper and isot over the rolled dough.`,
      },
      {
        id: 11,
        title: "Mantı",
        category: "Turkey",
        price: 8.99,
        img:"https://www.manti7.com/uploads/urunler/mantilar/kepekli-banner1_op.webp",
        desc: `Manti is a dish made by putting minced meat seasoned with various spices into small pieces of dough and boiling these dough pieces in water.`,
      },
      {
        id: 12,
        title: "Baklava",
        category: "Turkey",
        price: 6.99,
        img:"https://icdn.mavikadin.com/images/haberler/2020_05/buyuk/nadir-gulluoglu-ndan-baklava-hamuru-ve-baklava-serbeti-tarifi-1588800554.jpg",
        desc: `It is made by placing walnuts, pistachios, almonds or hazelnuts between thin doughs, depending on the region.`,
      },

    
  ];
  
  const section = document.querySelector(".section-center");
  const btnContainer = document.querySelector(".btn-container");
  
  const categoryList = () => {
    const categoryBtns = categories
      .map((category) => {
        return `<button class="btn btn-outline-dark btn-item" data-id=${category}>${category}</button>`;
      }).join("");
  
    btnContainer.innerHTML = categoryBtns;
    const filterBtns = document.querySelectorAll(".btn-item");
  
    //filter foodMenu
    filterBtns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const category = e.currentTarget.dataset.id;
        console.log(category);
        const foodMenuCategory = foodMenu.filter((foodMenuItem) => {
          if (foodMenuItem.category === category) {
            return foodMenuItem;
          }});
        if (category === "All") {
          listfoodMenu(foodMenu);}
           else {
          listfoodMenu(foodMenuCategory);
        }
      });
    });
  }; 
  const categories = foodMenu.reduce(
    (values, item) => {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["All"]
  );
  const listfoodMenu = (foodMenuItems) => {
    let displayfoodMenu = foodMenuItems.map((item) => {
      return `<div class="foodMenu-items col-lg-6 col-sm-12">
              <img
                src=${item.img}
                alt=${item.title}
                class="photo"/>
              <div class="foodMenu-info">
                <div class="foodMenu-title">
                  <h4>${item.title}</h4>
                  <h4 class="price">${item.price}</h4>
                </div>
                <div class="foodMenu-text">
                  ${item.desc}
                </div>
              </div>
            </div>
      `;
    });
    displayfoodMenu = displayfoodMenu.join("");
    section.innerHTML = displayfoodMenu;
  };
  
  listfoodMenu(foodMenu);
  categoryList();
  