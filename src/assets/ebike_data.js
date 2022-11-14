export const data = {
  ebikes: [
    {
      id: 1,
      basic: {
        brand: "Fucare",
        model: "Gemini",
        style: ["cargo", "utility", "fat tire"],
        price: 1899,
        weight: 79.4,
        weight_capacity_lbs: 400,
        top_speed_mph: 28,
        wheel_size_in: 20,
        tire_width_in: 4,
        colors: ["Graphite Grey"],
        folding: false,
        step_thru: true,
      },
      electronics: {
        battery: {
          capacity_ah: 20.8,
          voltage: 48,
        },
        controller_a: 20,
        motor_wattage: 750,
        motor_brand: "Fucare",
        torque_max_nm: 80,
        range: 100,
        cruise_control: true,
      },
      bicycle_components: {
        brakes: {
          brand: "Logan",
          type: "hydraulic"
        },
        suspension: ["front"],
        rear_rack: "included", // included, optional, none
        front_basket: "optional", // included, optional, none
        fenders: "included", // included, optional, none
        speeds: 7,
        crank_set_teeth: 42,
      }
    },
    {
      id: 2,
      basic: {
        brand: "Fucare",
        model: "Gemini X",
        style: ["cargo", "utility", "fat tire"],
        price: 1899,
        weight: 80.5,
        weight_capacity_lbs: 400,
        top_speed_mph: 28,
        wheel_size_in: 20,
        tire_width_in: 4,
        colors: ["Graphite Grey"],
        folding: false,
        step_thru: false,
      },
      electronics: {
        battery: {
          capacity_ah: 20.8,
          voltage: 48,
        },
        controller_a: 20,
        motor_wattage: 750,
        motor_brand: "Fucare",
        torque_max_nm: 80,
        range: 100,
        cruise_control: true,
      },
      bicycle_components: {
        brakes: {
          brand: "Logan",
          type: "hydraulic"
        },
        suspension: ["front"],
        rear_rack: "included", // included, optional, none
        front_basket: "optional", // included, optional, none
        fenders: "included", // included, optional, none
        speeds: 7,
        crank_set_teeth: 42,
      }
    },
    {
      id: 3,
      basic: {
        brand: "Ariel Rider",
        model: "Kepler",
        style: ["commuter", "fat tire"],
        price: 1999,
        weight: 73,
        weight_capacity_lbs: 300,
        top_speed_mph: 32,
        wheel_size_in: 26,
        tire_width_in: 4,
        colors: ["Black/Red", "Black/Blue", "Gray/Black", "Gray/Pink"],
        folding: false,
        step_thru: true,
      },
      electronics: {
        battery: {
          capacity_ah: 20,
          voltage: 52,
        },
        controller_a: 33,
        motor_wattage: 1000,
        motor_brand: "Bafang",
        torque_max_nm: -1,
        range: 75,
        cruise_control: false,
      },
      bicycle_components: {
        brakes: {
          brand: "Tektro HD-E 350",
          type: "hydraulic"
        },
        suspension: ["front"],
        rear_rack: "included", // included, optional, none
        front_basket: "optional", // included, optional, none
        fenders: "included", // included, optional, none
        speeds: 7,
        crank_set_teeth: 52,
      }
    },
        {
      id: 4,
      basic: {
        brand: "Ariel Rider",
        model: "X-Class 52V",
        style: ["fat tire"],
        price: 2399,
        weight: 78,
        weight_capacity_lbs: 300,
        top_speed_mph: 30,
        wheel_size_in: 20,
        tire_width_in: 4,
        colors: ["Red", "Black", "Blue"],
        folding: false,
        step_thru: true,
      },
      electronics: {
        battery: {
          capacity_ah: 20,
          voltage: 52,
        },
        controller_a: 33,
        motor_wattage: 1000,
        motor_brand: "Bafang",
        torque_max_nm: 110,
        range: 75,
        cruise_control: false,
      },
      bicycle_components: {
        brakes: {
          brand: "Tektro Dorado HDE350",
          type: "hydraulic"
        },
        suspension: ["front", "rear"],
        rear_rack: "optional", // included, optional, none
        front_basket: "none", // included, optional, none
        fenders: "included", // included, optional, none
        speeds: 7,
        crank_set_teeth: 48,
      }
    },
    {
      id: 4,
      basic: {
        brand: "Ariel Rider",
        model: "X-Class 52V Step-Thru",
        style: ["fat tire"],
        price: 2399,
        weight: 65.6,
        weight_capacity_lbs: 300,
        top_speed_mph: 33,
        wheel_size_in: 20,
        tire_width_in: 4,
        colors: ["Red", "Black", "Blue"],
        folding: false,
        step_thru: true,
      },
      electronics: {
        battery: {
          capacity_ah: 35,
          voltage: 52,
        },
        controller_a: 33,
        motor_wattage: 2000,
        motor_brand: "Bafang",
        torque_max_nm: 110,
        range: 70,
        cruise_control: false,
      },
      bicycle_components: {
        brakes: {
          brand: "Tektro Dorado HDE350",
          type: "hydraulic"
        },
        suspension: ["front", "rear"],
        rear_rack: "optional", // included, optional, none
        front_basket: "none", // included, optional, none
        fenders: "included", // included, optional, none
        speeds: 7,
        crank_set_teeth: 48,
      }
    },
    {
      id: 5,
      basic: {
        brand: "Ariel Rider",
        model: "Grizzly - 52V Dual Motor",
        style: ["fat tire", "dual motor"],
        price: 3299,
        weight: 108,
        weight_capacity_lbs: 300,
        top_speed_mph: 30,
        wheel_size_in: 20,
        tire_width_in: 4,
        colors: ["Red", "Yello", "Blue"],
        folding: false,
        step_thru: false,
      },
      electronics: {
        battery: {
          capacity_ah: 20,
          voltage: 52,
        },
        controller_a: -1,
        motor_wattage: 1000,
        motor_brand: "Bafang",
        torque_max_nm: -1,
        range: 75,
        cruise_control: false,
      },
      bicycle_components: {
        brakes: {
          brand: "Tektro Dorado HDE350",
          type: "hydraulic"
        },
        suspension: ["front", "rear"],
        rear_rack: "none", // included, optional, none
        front_basket: "none", // included, optional, none
        fenders: "included", // included, optional, none
        speeds: 7,
        crank_set_teeth: 52,
      }
    }
  ]
}


// {
//   id: 1,
//   basic: {
//     brand: ,
//     model: ,
//     style: [],
//     price: ,
//     weight: ,
//     weight_capacity_lbs: ,
//     top_speed_mph: ,
//     wheel_size_in: ,
//     tire_width_in: ,
//     colors: [],
//     folding: ,
//     step_thru: ,
//   },
//   electronics: {
//     battery: {
//       capacity_ah: ,
//       voltage: ,
//     },
//     controller_a: ,
//     motor_wattage: ,
//     motor_brand: ,
//     torque_max_nm: ,
//     range: ,
//     cruise_control: ,
//   },
//   bicycle_components: {
//     brakes: {
//       brand: ,
//       type: ,
//     },
//     suspension: ["],
//     rear_rack: , // included, optional, none
//     front_basket: , // included, optional, none
//     fenders: , // included, optional, none
//     speeds: ,
//     crank_set_teeth: ,
//   }
// }
