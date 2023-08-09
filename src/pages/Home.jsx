import React from 'react'

import AppHeader from '../components/AppHeader'
import AppFooter from '../components/AppFooter'

import NoteList from '../components/NoteList'
import NoteAddButton from '../components/NoteAddButton'
import NoteSearch from '../components/NoteSearch'
import NoteCreate from '../components/NoteCreate'

import { getInitialData } from '../data/notes'

class Home extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            notes: getInitialData(),
            cachedNotes: getInitialData(),
            showCreate: false
        }

        this.onSearchSubmit = this.onSearchSubmit.bind(this)
        this.onCreateSubmit = this.onCreateSubmit.bind(this)
        this.onAddButtonClicked = this.onAddButtonClicked.bind(this)
        this.onCancelCreateButtonClicked = this.onCancelCreateButtonClicked.bind(this)
        this.onDeleteButtonClicked = this.onDeleteButtonClicked.bind(this)
    }

    onSearchSubmit({
        query
    }) {
        this.setState({
            notes: this.state.cachedNotes.filter((note) => !query || note.title.toLowerCase().includes(query.toLowerCase()))
        })
    }

    onCreateSubmit({
        title, body
    }) {
        const { notes } = this.state
        const newNotes = [
            {
                id: +new Date(),
                title,
                body,
                createdAt: new Date(),
                archived: false
            },
            ...notes
        ]

        this.setState({
            notes: newNotes,
            cachedNotes: newNotes,
            showCreate: false
        })
    }

    onAddButtonClicked(event){
        this.setState({
            showCreate: true
        })
    }

    onCancelCreateButtonClicked(event){
        this.setState({
            showCreate: false
        })
    }

    onDeleteButtonClicked(id){
        let deleteConfirm = confirm('Move this to TRASH, U sure ?')

        if(deleteConfirm){
            const currNotes = this.state.notes.filter((note) => note.id != id)
            this.setState({
                notes: currNotes,
                cachedNotes: currNotes
            })
        }
    }

    render(){
        return <>
            <AppHeader/>

            <main>
                { !this.state.showCreate
                ? (
                    <>
                        <NoteAddButton onButtonClick={this.onAddButtonClicked}/>
                        <NoteSearch onSearch={this.onSearchSubmit}/>
                        <NoteList notes={this.state.notes} onDelete={this.onDeleteButtonClicked}/>
                    </>
                )
                : <NoteCreate onCancel={this.onCancelCreateButtonClicked} onSubmit={this.onCreateSubmit}/> }
            </main>

            <AppFooter/>
        </>
    }
}

export default Home