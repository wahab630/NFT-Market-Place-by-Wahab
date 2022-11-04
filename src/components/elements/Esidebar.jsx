import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";

const Esidebar = () => {
  return (
    <>
      <div className="container sidebar-left" >
        <div className="row">
          <div className="col-lg-3 ">
            <Sidebar width="300px">
              <Menu>
                <span className="fw-bold">Filters</span>
                <SubMenu label="Listing Types">
                  <MenuItem>
                    <input type="checkbox" className="input-checks me-2 " />
                    <span>Buy Now</span>
                  </MenuItem>
                  <MenuItem>
                    <input type="checkbox" className="input-checks me-2 " />
                    <span className="pb-2">Auction</span>
                  </MenuItem>
                </SubMenu>
                <SubMenu label="Curation">
                  <MenuItem>
                    <input type="checkbox" className="input-checks me-2 " />
                    <span>Curated</span>
                  </MenuItem>
                  <MenuItem>
                    <input type="checkbox" className="input-checks me-2 " />
                    <span className="pb-2">Non-Curated</span>
                  </MenuItem>
                </SubMenu>
                <SubMenu label="Price">
                  <MenuItem>
                    <span>
                      <input type="text" />
                    </span>
                  </MenuItem>
                </SubMenu>
                <SubMenu label="Collections">
                  <MenuItem> Line charts </MenuItem>
                </SubMenu>
              </Menu>
            </Sidebar>
          </div>
        </div>
      </div>
    </>
  );
};

export default Esidebar;
