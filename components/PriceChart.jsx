import * as React from 'react';
import styles from '../styles/Main.module.css';
import { widget, version } from '../public/static/charting_library';
import DataFeed from '@/utils/DataFeed';

function getLanguageFromURL() {
	const regex = new RegExp('[\\?&]lang=([^&#]*)');
	const results = regex.exec(window.location.search);
	return results === null ? null : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

export class TVChartContainer extends React.PureComponent {
	
	static defaultProps = {
		symbol: 'PEPE',
		interval: 'D',
		datafeedUrl: 'https://demo_feed.tradingview.com',
		libraryPath: '/static/charting_library/',
		chartsStorageUrl: 'https://saveload.tradingview.com',
		chartsStorageApiVersion: '1.1',
		clientId: 'tradingview.com',
		userId: 'public_user_id',
		fullscreen: false,
		autosize: true,
		studiesOverrides: {},
	};

	tvWidget = null;

	constructor(props) {
		super(props);

		this.ref = React.createRef();
	}

	 componentDidMount() {
		
				const widgetOptions = {
					symbol: this.props.symbol,
					datafeed: DataFeed(),
					interval: this.props.interval,
					container: this.ref.current,
					library_path: this.props.libraryPath,
					theme: "dark",
					locale: 'en',
					locale: getLanguageFromURL() || 'en',
					disabled_features: ['use_localstorage_for_settings'],
					enabled_features: ['study_templates'],
					charts_storage_url: this.props.chartsStorageUrl,
					charts_storage_api_version: this.props.chartsStorageApiVersion,
					client_id: this.props.clientId,
					user_id: this.props.userId,
					fullscreen: this.props.fullscreen,
					autosize: this.props.autosize,
					studies_overrides: this.props.studiesOverrides,
				};
		
				const tvWidget = new widget(widgetOptions);
				this.tvWidget = tvWidget;
		
				tvWidget.onChartReady(() => {
					tvWidget.headerReady().then(() => {
						const button = tvWidget.createButton();
						button.setAttribute('title', 'Click to show a notification popup');
						button.classList.add('apply-common-tooltip');
						button.addEventListener('click', () => tvWidget.showNoticeDialog({
							title: 'Notification',
							body: 'TradingView Charting Library API works correctly',
							callback: () => {
								console.log('Noticed!');
							},
						}));
		
						button.innerHTML = 'Check API';
					});
				});
	
	}

	componentWillUnmount() {
		if (this.tvWidget !== null) {
			this.tvWidget.remove();
			this.tvWidget = null;
		}
	}

	render() {
		return (	
			<>
				<div ref={this.ref} className={styles.pricechart} />
			</>
		);
	}
}
