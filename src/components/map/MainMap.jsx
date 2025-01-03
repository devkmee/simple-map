import React, { useEffect, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';

import mapConfig from '../../configs/mapConfig';

import Map from 'ol/Map.js';
import View from 'ol/View.js';
import TileLayer from 'ol/layer/Tile';
import { OSM } from 'ol/source';
import { fromLonLat, get as getProjection } from 'ol/proj';
import { defaults } from 'ol/control/defaults';
import ScaleLine from 'ol/control/ScaleLine.js';

import 'ol/ol.css';

export default function MainMap({ mapId }) {
	/**
	 * 지도 초기화
	 */
	const init = () => {
		const view = new View({
			projection: getProjection(mapConfig.projection),
			// resolutions: mapConfig.resolutions,
			// center: mapConfig.center,
			center: fromLonLat([126.752, 37.4713], getProjection('EPSG:3857')),
			zoom: mapConfig.zoom.default,
			minZoom: mapConfig.zoom.min,
			maxZoom: mapConfig.zoom.max,
			enableRotation: false,
			constrainRotation: false,
		});

		const map = new Map({
			target: mapId,
			view: view,
			layers: createDefaultLayers(),
			pixelRatio: 1,
			logo: false,
			loadTilesWhileAnimating: false,
			loadTilesWhileInteracting: false,
			controls: new defaults().extend([new ScaleLine()]),
		});
	};

	/**
	 * 기본 레이어 생성
	 * @returns {Array} defaultLayers
	 */
	const createDefaultLayers = () => {
		const defaultLayers = [];

		const osmLayer = new TileLayer({
			preload: Infinity,
			source: new OSM(),
		});
		defaultLayers.push(osmLayer);

		return defaultLayers;
	};

	useEffect(() => {
		init();
	}, []);

	return <div id={mapId} style={{ height: '100%', width: '100%' }}></div>;
}

MainMap.propTypes = {
	mapId: PropTypes.string.isRequired,
};
