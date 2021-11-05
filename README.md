# personal-metrics-tracker

GET /profile
  input: email
  return metric IDs created

GET /metric
  input: metric ID, email, date range
  return: list of metric values with dates
PUT /metric
  input: email, metric ID, timestamp up update
  return: updated metric with timestamp
POST /metric
  input: email, generate ID
  return: metric ID
DELETE /metric
  input: email, metric ID
  return: nothing?

To get metrics, maybe instead of creating an API endpoint, we let the front end query for each metric ID since it will (or can) have already called GET /profile.
