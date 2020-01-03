import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, TextInput } from "react-native";


const {width, height} = Dimensions.get('window');

export default class Todo extends Component{
    state = {
        isEditing: false,
        isCompleted: false,
        toDoValue: "개색갸"
    };

    render() {
        const { isCompleted, isEditing, toDoValue } = this.state;
        const { text } = this.props;
        

        return(
            <View style={styles.container}>
                <View style={styles.column}>
                    <TouchableOpacity onPress={this._togglecomplete}>
                        <View
                            style={[
                                styles.circle,
                                isCompleted ? styles.completedCircle : styles.uncompletedCircle
                            ]} />
                    </TouchableOpacity>
                    {isEditing ? (  // true라면..
                        <TextInput
                            style={[
                                styles.input,
                                styles.text,
                                isCompleted ? styles.completedtext : styles.uncompletedtext
                            ]}
                            value = {toDoValue} 
                            multiline={true}
                            onChangeText={this._controlInput}
                            returnKeyType={"done"}
                            onBlur={this._finishEditing}
                        />
                        
                    ) : (  // false라면..
                        <Text
                        style={[
                            styles.text,
                            isCompleted ? styles.completedtext : styles.uncompletedtext
                        ]}> {text} </Text> 
                    )}
                </View>                
                    {isEditing ? (
                        <View style={styles.actions}>
                            <TouchableOpacity onPressOut={this._finishEditing}>
                                <View style={styles.actionContainer}>
                                    <Text style={styles.actionText}>✔️</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    ) : (
                        <View style={styles.actions}>
                            <TouchableOpacity onPressOut={this._startEditing}>
                                <View style={styles.actionContainer}>
                                    <Text style={styles.actionText}>✏️</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={styles.actionContainer}>
                                    <Text style={styles.actionText}>❌</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    )}
            </View>
        )
    }

    _togglecomplete = () => {
        this.setState(prevState => {
            return {
                isCompleted: !prevState.isCompleted
            }
        })
    };

    _startEditing = () => {
        const { text } = this.props;
        this.setState({ 
            isEditing: true,
            toDoValue: text
         })
        
    };

    _finishEditing = () => {
        this.setState({
            isEditing: false
        })
    };

    _controlInput = (text) => {
        this.setState({
            toDoValue : text
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
        justifyContent: 'space-between'
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
        borderColor: "#8D27F2"
    },
    uncompletedCircle: {
        borderColor: "#F2BE22"
    },
    completedtext: {
        color: '#8D27F2',
        textDecorationLine: 'line-through'
    },
    uncompletedtext: {
        color: '#fff'
    },
    column: {
        flexDirection: "row",
        alignItems: 'center',
        width: width / 2,
        justifyContent: 'space-between'
    },
    actions: {
        flexDirection: "row"
    },
    actionContainer: {
        marginVertical: 10,
        marginHorizontal: 10
    },
    input: {
        marginVertical: 15
    },
    width: {
        marginVertical: 20,
        width: width / 2
    }




})