import React, {useState} from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import styles from './styles';

const ListTodo = ({listNgapain, callbackClearList}) => {

    const Item = ({ngapain}) => {
        return(
            <View style={styles.listItem}>
                <View style={styles.leftSection}>
                    <Text style={styles.listTitle}>{ngapain.ngapain}</Text>
                    <Text style={styles.listDate}>{ngapain.tanggal}</Text>
                </View>
                <View style={styles.rightSection}>
                    <Text style={styles.listStatus}>{ngapain.status}</Text>
                </View>
            </View>
        )
    }

    const getItemCount = (data) => {
        return data.length;
    }

    return (
        <View style={styles.wrapper}>
            <View style={styles.wrapperTitle}>
                <Text style={styles.title}>List Doing</Text>
                {listNgapain.length ? (
                <TouchableOpacity onPress={() => {callbackClearList()}}>
                    <Text>Clear List</Text>
                </TouchableOpacity>
                ) : (
                <></>
                )}
            </View>
            {listNgapain.length ? (
            <View>
                <FlatList 
                    data={listNgapain} 
                    renderItem={({item}) => <Item ngapain={item} />} 
                    keyExtractor= {item => item.key} 
                />
            </View>
            ) : (
            <Text>Masukin loe mau ngapain aja cuy ?</Text>
            )}
        </View>
    );
}

export default ListTodo;