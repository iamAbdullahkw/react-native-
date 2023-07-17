import { View } from "native-base";
import React from "react";
import { Image, ScrollView, Text } from "react-native";
import Card from "./Card";

const Lisst = () => {
  const data = [
    {
      name: "pizza ",
      rating: "good",
      time: "30min",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDzhEaz-ibDDJydKSbmMRpvCErYiwhhim19UE3d_wDXnW5HeRFGYkrVXWO-cfzZtlRd5M&usqp=CAU",
    },
    {
      name: "pasta ",
      rating: "good",
      time: "30min",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDzhEaz-ibDDJydKSbmMRpvCErYiwhhim19UE3d_wDXnW5HeRFGYkrVXWO-cfzZtlRd5M&usqp=CAU",
    },
    {
      name: "burger ",
      rating: "good",
      time: "30min",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDzhEaz-ibDDJydKSbmMRpvCErYiwhhim19UE3d_wDXnW5HeRFGYkrVXWO-cfzZtlRd5M&usqp=CAU",
    },
    {
      name: "pizzzza ",
      rating: "good",
      time: "30min",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDzhEaz-ibDDJydKSbmMRpvCErYiwhhim19UE3d_wDXnW5HeRFGYkrVXWO-cfzZtlRd5M&usqp=CAU",
    },
    {
      name: "burger ",
      rating: "good",
      time: "30min",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDzhEaz-ibDDJydKSbmMRpvCErYiwhhim19UE3d_wDXnW5HeRFGYkrVXWO-cfzZtlRd5M&usqp=CAU",
    },
    {
      name: "burger ",
      rating: "good",
      time: "30min",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDzhEaz-ibDDJydKSbmMRpvCErYiwhhim19UE3d_wDXnW5HeRFGYkrVXWO-cfzZtlRd5M&usqp=CAU",
    },
    {
      name: "pasta ",
      rating: "good",
      time: "30min",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDzhEaz-ibDDJydKSbmMRpvCErYiwhhim19UE3d_wDXnW5HeRFGYkrVXWO-cfzZtlRd5M&usqp=CAU",
    },
    {
      name: "pasta ",
      rating: "good",
      time: "30min",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDzhEaz-ibDDJydKSbmMRpvCErYiwhhim19UE3d_wDXnW5HeRFGYkrVXWO-cfzZtlRd5M&usqp=CAU",
    },
  ];

  const menuList = data.map((item) => (
    <Card
      name={item.name}
      time={item.time}
      image={item.image}
      rating={item.rating}
    />
  ));
  return (
    <ScrollView
      style={{
        flex: 0.6,
        backgroundColor: "blue",
      }}
    >
      {menuList}
    </ScrollView>
  );
};

export default Lisst;
