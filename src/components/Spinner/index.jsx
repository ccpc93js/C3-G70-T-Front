import React from 'react'

export default function Spinner() {
  return (
    <div className="w-100 d-flex justify-content-center py-4">
          <div className="spinner-border " role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
  )
}
