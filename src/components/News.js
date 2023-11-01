import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
    static defaultProps = {
        pageSize: 18,
        category: 'general'
    }
    static propTypes = {
        category: PropTypes.string,
        pageSize: PropTypes.number
    }
    capitaliseFirstLatter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: true,
            page: 2,
            totalResults: 0
        }
        document.title = `${this.capitaliseFirstLatter(this.props.category)}-Headlines`
    }
    async updateNews() {
        this.props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=1&pagesize=${this.props.pageSize}`;
        this.setState({ loading: true })
        let data = await fetch(url);
        this.props.setProgress(50);
        let parsedData = await data.json();
        this.props.setProgress(70);
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        })
        this.props.setProgress(100);
    }
    async componentDidMount() {
        this.updateNews();
    }
    handlePrevClick = async () => {
        this.setState({
            page: this.state.page - 1,
        })
        this.updateNews();
    }
    handleNextClick = async () => {

        this.setState({
            page: this.state.page + 1,
        })
        this.updateNews();
    }
    fetchMoreData = async () => {
        this.setState({
            page: this.state.page + 1
        })
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pagesize=${this.props.pageSize}`;

        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults,
        })
    };

    render() {
        return (
            <>
                <div class="p-2 mb-2 bg-secondary text-white">
                    <h1 className="text-center" style={{ marginTop: '90px' }}>{(this.props.country) == "in" ? "India's" : this.capitaliseFirstLatter(this.props.country)} {this.capitaliseFirstLatter(this.props.category)} Headlines</h1>
                    {/* <div className="d-flex justify-content-between">
                    <button type="button" disabled={this.state.page <= 1} className="btn btn-outline-dark" onClick={this.handlePrevClick}>&laquo;Previous</button>
                    <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} className="btn btn-outline-dark " onClick={this.handleNextClick}>Next&raquo;</button>
                </div> */}
                    {this.state.loading && <Spinner />}
                    <InfiniteScroll
                        dataLength={this.state.articles.length}
                        next={this.fetchMoreData}
                        hasMore={this.state.articles.length !== this.state.totalResults}
                        loader={<Spinner />}
                    >
                        <div className="container">
                            <div className="row" >
                                {this.state.articles.map((element) => {
                                    return <div className="col-md-4" key={element.url}>
                                        <Newsitem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                                    </div>
                                })}
                            </div>
                        </div>
                    </InfiniteScroll>
                  
                </div>
            </>
        )
    }
}

export default News
