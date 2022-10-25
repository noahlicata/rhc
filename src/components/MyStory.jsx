import React from "react";
import pic from "../fillerpic.png";

const MyStory = () => {
  return (
    <div>
      {/* <div>Process of healing from sickness etc</div>
      <div>How I found functional health</div>
      <div>Why I decided to become a health coach</div>
      <div>How im hoping i can help people</div> */}
      <div className="container my-24 px-6 mx-auto">
        <section className="mb-32 text-gray-800">
          <div className="block rounded-lg shadow-lg bg-white">
            <div className="flex flex-wrap items-center">
              <div className="hidden lg:flex grow-0 shrink-0 basis-auto lg:w-6/12 xl:w-4/12">
                <img
                  src={pic}
                  alt="Trendy Pants and Shoes"
                  className="w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
                />
              </div>
              <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 xl:w-8/12">
                <div className="px-6 py-12 md:px-12">
                  <h2 className="text-2xl font-bold mb-4">
                    A Little Bit About Me
                  </h2>
                  <p className="text-gray-500 mb-6">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Earum maxime voluptas ipsam aliquam itaque cupiditate
                    provident architecto expedita harum culpa odit, inventore
                    rem molestias laborum repudiandae corporis pariatur quo eius
                    iste! Quaerat, assumenda voluptates! Molestias, recusandae?
                    Maxime fuga omnis ducimus.
                  </p>
                  <p className="text-gray-500 mb-6">
                    Aenean id ex posuere, ultricies nunc eget, fringilla arcu.
                    Sed finibus lobortis ex, id imperdiet enim congue nec.
                    Praesent tincidunt semper quam, non bibendum massa mattis
                    eget. Proin iaculis quam luctus velit vestibulum tempus.
                    Fusce venenatis venenatis lacinia. Maecenas vehicula
                    accumsan vestibulum. Curabitur eu lorem in nisl laoreet
                    aliquet sit amet vel lacus. Aliquam rhoncus tortor at erat
                    mattis, ut gravida velit porttitor. Nulla pharetra sapien
                    sapien, sit amet iaculis lectus congue in. Nullam sagittis
                    imperdiet est, id consectetur velit fringilla egestas. Morbi
                    luctus luctus diam et semper. Cras feugiat ultricies
                    dignissim. Donec commodo ex vitae odio auctor, sit amet
                    mollis massa suscipit. Mauris diam tortor, hendrerit eget
                    odio eget, ultricies viverra nisl. Curabitur ligula felis,
                    sodales et sagittis ut, accumsan id enim.
                  </p>
                  <p className="text-gray-500 mb-6">
                    Etiam odio justo, aliquam non felis in, vehicula
                    pellentesque augue. Suspendisse leo urna, congue vel viverra
                    vitae, sagittis eu nulla. Integer elementum urna nec turpis
                    dignissim, a ornare tellus porta. Aenean faucibus odio at
                    purus eleifend dictum. Quisque pharetra, dolor sit amet
                    ultrices condimentum, enim nibh placerat nisl, tristique
                    rutrum arcu risus quis lorem. Sed eu sodales justo. Etiam
                    sit amet diam varius, tristique ligula maximus, dictum mi.
                    Integer pellentesque efficitur fringilla.
                  </p>
                  <p className="text-gray-500">
                    Nullam est orci, ultrices eget magna at, lobortis suscipit
                    eros. Duis id nulla sed nunc porta ultricies. Morbi nibh
                    nulla, ultrices sit amet neque a, congue bibendum magna.
                    Curabitur pellentesque venenatis rutrum. Aliquam at finibus
                    dolor. Mauris vel semper sem. Vestibulum quis mi et sapien
                    rhoncus vulputate quis nec lorem.Vestibulum consectetur
                    lectus et eros egestas tincidunt. Pellentesque habitant
                    morbi tristique senectus et netus et malesuada fames ac
                    turpis egestas. Vestibulum ante ipsum primis in faucibus
                    orci luctus et ultrices posuere cubilia curae; Vestibulum
                    ante ipsum primis in faucibus orci luctus et ultrices
                    posuere cubilia curae; Quisque turpis nisi, blandit vel
                    consectetur et, rutrum vitae elit. Integer velit libero,
                    luctus sit amet hendrerit pulvinar, bibendum vitae neque.
                    Mauris molestie bibendum nibh eget sodales. Quisque posuere
                    justo id lacinia commodo. Vestibulum ante ipsum primis in
                    faucibus orci luctus et ultrices posuere cubilia curae; Ut
                    magna neque, scelerisque hendrerit lobortis iaculis, tempus
                    ac neque.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MyStory;
