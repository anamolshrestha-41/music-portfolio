# Analytics Implementation

## Vercel Analytics
- Automatically tracks page views and user interactions
- No configuration needed - works out of the box
- View analytics in Vercel dashboard

## Google Analytics Setup
1. Create GA4 property at https://analytics.google.com
2. Replace `GA_MEASUREMENT_ID` in:
   - `index.html` (2 places)
   - `src/utils/gtag.js`
3. Deploy to see analytics data

## Tracked Events

### Audio Player
- `audio_player` - Play, pause, next, previous track
- Includes track title and index

### Section Engagement
- `section_view` - When user enters/exits sections
- Tracks time spent in each section

### Form Interactions
- `form_interaction` - Form submissions, field focus, validation errors
- Tracks contact form engagement

### Downloads
- `file_download` - Resume downloads
- Tracks file name and type

### Navigation
- `navigation` - Page transitions
- Tracks user journey through site

## Analytics Dashboard
- **Vercel**: Real-time analytics in project dashboard
- **Google Analytics**: Detailed user behavior, demographics, acquisition
- **Custom Events**: Track specific music portfolio interactions