import { SafeAreaView } from "@core-ui";
import React, { useEffect, useState } from "react";

import { View, Text, FlatList, Image } from "react-native";
import { CategoryCard, PreviewModal, ProductCard, SearchBar } from './components'
import { useProducts } from "@hooks";
import { categoryColors } from '@constants'
import { Loader } from "@components";
import { hp, wp } from "@src/helpers";
import { styles } from "./styles";
import { addToCart } from '@redux'
import { useDispatch } from "react-redux";
const ProductsScreen: React.FC = () => {
    const { getAllCategories, categoriesLoading, categories, getAllProducts, products, productsLoading } = useProducts()
    const [productsData, setProductsData] = useState([])
    const [productsFilteredViaCategory, setProductsFilteredViaCategory] = useState([])
    const [selectedCategory, setSelectedCategory] = useState('')
    const [search, setSearch] = useState('')
    const dispatch = useDispatch()
    const [previewItemConfig, setPreviewItemConfig] = useState({
        visible: false,
        item: {}

    })
    useEffect(() => {
        getAllCategories()
        getAllProducts()

    }, [])
    useEffect(() => {
        setProductsData(products)
        setProductsFilteredViaCategory(products)


    }, [products])

    const RenderItem = ({ item, index }: { item: string, index: number }) => {

        return (
            <View style={{ margin: hp(1) }}>
                <CategoryCard
                    title={item}
                    selected={selectedCategory}
                    onPress={() => {FilterViaCategory(item)}}
                />
            </View>

        )
    }

    const FilterViaCategory = (category: string) => {
        if (selectedCategory == category) {
            setProductsData(products)
            setSelectedCategory('')
        }
        else {
            const filter = products.filter((item: any) => item.category == category)
            setProductsData(filter)
            setSelectedCategory(category)
        }

    }

    const FilterData = (text: string) => {
        if (text == '') {
            setProductsData(productsFilteredViaCategory)
            setSearch('')
        }
        else {
            const filter =
                productsFilteredViaCategory.filter((item: any) => {
                    const itemToLowercase = item.title.toLocaleLowerCase()
                    if (itemToLowercase.includes(text)) { return item }
                })
            setProductsData(filter)
            setSearch(text)
        }

    }


    const RenderProducts = ({ item }: { item: any }) => {
        return (
            <ProductCard
                onPress={() => { setPreviewItemConfig({ visible: true, item }) }}
                image={item.images[0]}
                title={item.title}
                price={`$ ${item.price} `}
                rating={item.rating}
                stock={item.stock}
            />
        )
    }
    return (
        <SafeAreaView>

            <SearchBar
                value={search}
                PlaceHolder="Search any product..."
                onChangeText={(text) => FilterData(text.toLocaleLowerCase())}
            />
            <View>
                {
                    categoriesLoading ?
                        <Loader />

                        :
                        <>
                            <Text style={styles().titleText}>Featured Categories</Text>
                            <FlatList
                                contentContainerStyle={{ paddingBottom: hp(1) }}
                                data={categories}
                                renderItem={RenderItem}
                                keyExtractor={(item, index) => index.toString()}
                                horizontal
                            />
                        </>

                }
            </View>



            <Text style={styles().titleText}>Our Products</Text>
            {
                productsLoading ?
                    <Loader />

                    :

                    <FlatList
                        contentContainerStyle={{ paddingBottom: hp(4) }}
                        data={productsData}
                        renderItem={RenderProducts}
                        ListEmptyComponent={() => <View style={styles().noItemContainer}>
                            <Text style={styles().noItemText}>Sorry No Items</Text>
                        </View>}
                        keyExtractor={(item, index) => index.toString()}
                        numColumns={2}
                    />
            }


            {
                previewItemConfig && <PreviewModal
                    item={previewItemConfig.item}
                    onPress={() => {
                        dispatch(addToCart(previewItemConfig.item))
                        setPreviewItemConfig({ visible: false, item: {} })
                    }}
                    visible={previewItemConfig.visible}
                    onCLose={() => { setPreviewItemConfig({ visible: false, item: {} }) }}
                />
            }


        </SafeAreaView>
    )
}

export default ProductsScreen