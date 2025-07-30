import { track } from '@vercel/analytics'

// Track audio player events
export const trackAudioEvent = (action, trackTitle, trackIndex) => {
  track('audio_player', {
    action,
    track_title: trackTitle,
    track_index: trackIndex
  })
}

// Track section engagement
export const trackSectionView = (sectionName, timeSpent = 0) => {
  track('section_view', {
    section: sectionName,
    time_spent: timeSpent
  })
}

// Track form interactions
export const trackFormEvent = (action, formType) => {
  track('form_interaction', {
    action,
    form_type: formType
  })
}

// Track navigation
export const trackNavigation = (from, to) => {
  track('navigation', {
    from_page: from,
    to_page: to
  })
}

// Track download events
export const trackDownload = (fileName, fileType) => {
  track('file_download', {
    file_name: fileName,
    file_type: fileType
  })
}

// Track search events
export const trackSearch = (searchTerm, resultsCount) => {
  track('voice_search', {
    search_term: searchTerm,
    results_count: resultsCount
  })
}

// Track filter events
export const trackFilter = (filterType, filterValue) => {
  track('voice_filter', {
    filter_type: filterType,
    filter_value: filterValue
  })
}

// Track track filter events
export const trackTrackFilter = (filterValue, resultsCount) => {
  track('track_filter', {
    filter_value: filterValue,
    results_count: resultsCount
  })
}