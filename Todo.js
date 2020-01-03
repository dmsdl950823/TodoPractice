import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from "react-native";


const {width, height} = Dimensions.get('window');

export default class Todo extends Component{
    state = {
        isEditing: false,
        isCompleted: false
    };

    render() {
        const { isCompleted } = this.state;

        return(
            <View style={styles.container}>
                <TouchableOpacity onPress={this._togglecomplete}>
                    <View
                        style={[
                            styles.circle,
                            isCompleted ? styles.completedCircle : styles.uncompletedCircle
                        ]} />
                </TouchableOpacity>
                <Text style={styles.text}>Hello I'm to do</Text>
            </View>
        )
    }

    _togglecomplete = () => {
        this.setState(prevState => {
            return {
                isCompleted: !prevState.isCompleted
            }
        })
    }
}

const styles = StyleSheet.create({
    container: {
        width: width - 70,
        borderBottomColor: '#7F25D9',
        borderBottomWidth: StyleSheet.hairlineWidth,
        flexDirection: 'row',
        alignItems: 'center',
    },
    circle: {
        width: 30,
        height: 30,
        borderRadius: 15,
        borderColor: '#F2BE22',
        borderWidth: 3,
        marginRight: 20
    },
    text: {
        fontWeight: '600',
        fontSize: 20,
        marginVertical: 20,
        color: '#fff'
    },
    completedCircle: {
        borderColor: "#7F25D9"
    },
    uncompletedCircle: {
        borderColor: "#F2BE22"
    }


})